export const linearRegressionExample = `import numpy as np

# Five illustrative observations (not a real-world dataset).
x = np.array([0., 1., 2., 3., 4.])
y = np.array([1., 2., 2., 4., 5.])

# Least-squares solution for one feature and an intercept.
x_centered = x - x.mean()
y_centered = y - y.mean()
slope = (x_centered @ y_centered) / (x_centered @ x_centered)
intercept = y.mean() - slope * x.mean()

predictions = intercept + slope * x
residuals = y - predictions
mse = np.mean(residuals ** 2)

print(f"intercept={intercept:.2f}, slope={slope:.2f}")
print("predictions:", np.round(predictions, 2))
print("residuals:", np.round(residuals, 2))
print(f"training MSE={mse:.2f}")`;

export const linearRegressionOutput = `intercept=0.80, slope=1.00
predictions: [0.8 1.8 2.8 3.8 4.8]
residuals: [ 0.2  0.2 -0.8  0.2  0.2]
training MSE=0.16`;

export const regressionObservations = [1, 2, 2, 4, 5];
