export const linearRegressionExample = `from urllib.request import urlopen
import numpy as np

# Official Section 5.2 dataset, pinned to a repository revision.
root = "https://raw.githubusercontent.com/"
repo = "neonwatty/machine-learning-refined-notes-assets/"
revision = "63161442406ebbdd331af1e22e6327eabd81d344/"
path = "notes/5_Linear_regression/chapter_5_datasets/"
url = root + repo + revision + path + "2d_linregress_data.csv"
with urlopen(url) as response:
    data = np.loadtxt(response, delimiter=",")
x = data[:-1, :]  # N by P: one input per column
y = data[-1:, :]  # 1 by P

# Section 5.2: bias plus feature-touching weights.
def model(x, w):
    a = w[0] + np.dot(x.T, w[1:])
    return a.T

def least_squares(w):
    cost = np.sum((model(x, w) - y) ** 2)
    return cost / float(y.size)

# Notebook Example 3 / book Example 5.2.
w = np.array([-1.0, -2.0])[:, np.newaxis]
alpha = 0.5
initial_cost = least_squares(w)
for k in range(75):
    error = model(x, w) - y
    # Analytic gradient in place of the notebook's autograd helper.
    bias_grad = 2 * np.mean(error)
    feature_grad = 2 * (x @ error.T) / y.size
    gradient = np.vstack(([bias_grad], feature_grad))
    w = w - alpha * gradient

print(f"N={x.shape[0]}, P={y.size}")
print(f"initial cost={initial_cost:.6f}")
print(f"w0={w[0, 0]:.6f}, w1={w[1, 0]:.6f}")
print(f"cost after 75 steps={least_squares(w):.6f}")`;

export const linearRegressionOutput = `N=1, P=50
initial cost=5.960095
w0=0.001918, w1=0.985097
cost after 75 steps=0.002296`;
