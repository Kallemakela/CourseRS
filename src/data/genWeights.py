import numpy as np
import pandas as pd

n = 20
maxWeight = 0.8
W = np.random.rand(n,n) * maxWeight
W = np.round(W, 2)
df = pd.DataFrame(W)
df.to_csv('weights.csv')