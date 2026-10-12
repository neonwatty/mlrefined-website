"""Execute the exact published snippet; requires NumPy in the Python environment.

Run: python scripts/verify-linear-regression-example.py
"""
import contextlib
import io
from pathlib import Path
import re

import numpy as np

source = (Path(__file__).resolve().parents[1] / "src/content/linear-regression-example.ts").read_text()
code = re.search(r"export const linearRegressionExample = `([\s\S]*?)`;", source)[1]
expected = re.search(r"export const linearRegressionOutput = `([\s\S]*?)`;", source)[1]
namespace = {}
output = io.StringIO()
with contextlib.redirect_stdout(output):
    exec(code, namespace)
assert output.getvalue().strip() == expected
x, y = namespace["x"], namespace["y"]
# Independent numerical solution, not a second implementation of the formula.
coefficients = np.linalg.lstsq(np.column_stack([np.ones_like(x), x]), y, rcond=None)[0]
np.testing.assert_allclose(coefficients, [namespace["intercept"], namespace["slope"]])
np.testing.assert_allclose(namespace["mse"], 0.16)
assert abs(namespace["residuals"].sum()) < 1e-12
plot_y = re.search(r"export const regressionObservations = (\[[^;]+\]);", source)[1]
import json
np.testing.assert_array_equal(json.loads(plot_y), y)
# Verify the proposed outlier experiment changes the fit and increases error.
outlier = {}
with contextlib.redirect_stdout(io.StringIO()):
    exec(code.replace("[1., 2., 2., 4., 5.]", "[1., 2., 8., 4., 5.]"), outlier)
assert outlier["mse"] > namespace["mse"]
assert outlier["intercept"] != namespace["intercept"]
# Negative case: constant x cannot identify a unique slope (documented warning).
with np.errstate(divide="ignore", invalid="ignore"), contextlib.redirect_stdout(io.StringIO()):
    constant = {}
    exec(code.replace("[0., 1., 2., 3., 4.]", "[1., 1., 1., 1., 1.]"), constant)
assert not np.isfinite(constant["slope"])
print(output.getvalue(), end="")
print("PASS: published output, independent least squares, visual data, outlier experiment, constant-input failure")
