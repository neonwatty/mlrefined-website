"""Verify the exact published Chapter 5 adaptation (requires NumPy and internet).

Run: python scripts/verify-linear-regression-example.py
"""
import contextlib
import hashlib
import io
from pathlib import Path
import re
from urllib.request import urlopen

import numpy as np

root = Path(__file__).resolve().parents[1]
source = (root / "src/content/linear-regression-example.ts").read_text()
code = re.search(r"export const linearRegressionExample = `([\s\S]*?)`;", source)[1]
expected = re.search(r"export const linearRegressionOutput = `([\s\S]*?)`;", source)[1]
namespace = {}
output = io.StringIO()
with contextlib.redirect_stdout(output):
    exec(code, namespace)
assert output.getvalue().strip() == expected
x, y, w = (namespace[key] for key in ["x", "y", "w"])
assert x.shape == (1, 50) and y.shape == (1, 50) and w.shape == (2, 1)
with urlopen(namespace["url"]) as response:
    remote = response.read()
local = (root / "public/learning-data/chapter-5/2d_linregress_data.csv").read_bytes()
assert remote == local, "Download must be the original pinned notebook dataset"
np.testing.assert_array_equal(np.loadtxt(io.BytesIO(local), delimiter=","), namespace["data"])
# Independent solver bounds the approximate gradient-descent result.
design = np.vstack([np.ones((1, y.size)), x]).T
optimum = np.linalg.lstsq(design, y.T, rcond=None)[0]
np.testing.assert_allclose(w, optimum, atol=0.026)
assert 0 <= namespace["least_squares"](w) - namespace["least_squares"](optimum) < 0.0001
# Finite differences independently check the analytic gradient at initialization.
initial = np.array([[-1.0], [-2.0]])
error = namespace["model"](x, initial) - y
analytic = np.vstack(([2 * np.mean(error)], 2 * (x @ error.T) / y.size))
for i in range(2):
    delta = np.zeros_like(initial)
    delta[i, 0] = 1e-5
    numerical = (namespace["least_squares"](initial + delta) - namespace["least_squares"](initial - delta)) / 2e-5
    np.testing.assert_allclose(analytic[i, 0], numerical, rtol=1e-8)
# The book's contrasting learning rate makes slower progress in 75 steps.
slow = {}
with contextlib.redirect_stdout(io.StringIO()):
    exec(code.replace("alpha = 0.5", "alpha = 0.01"), slow)
assert slow["least_squares"](slow["w"]) > namespace["least_squares"](w)
# No silent extra averaging: a single-observation cost must equal its square error.
namespace["x"] = np.array([[2.0]])
namespace["y"] = np.array([[5.0]])
np.testing.assert_allclose(namespace["least_squares"](np.array([[1.0], [1.0]])), 4.0)
print(output.getvalue(), end="")
print("PASS: exact output, source dataset, least-squares bound, finite-difference gradient, learning-rate comparison, one-point cost")
print("Dataset SHA256:", hashlib.sha256(local).hexdigest())
