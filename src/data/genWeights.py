import numpy as np
import pandas as pd
import random

n = 4

# more random
# W(i, j) values are random (uniformly distributed)
# values from 0 to maxWeight = 1 - abs(i - j) / n
# W = np.zeros((n, n))
# for i in range(n):
#     for j in range(n):
#         maxW = 1 - abs(i - j) / n
#         W[i, j] = round(maxW * random.random(), 2)

# less random
# W(i, j) values are random (uniformly distributed)
# from minWeight = max(maxWeight - randomness, 0)
# to maxWeight = 1 - abs(i - j) / n
randomness = 0.3
W = np.zeros((n, n))
for i in range(n):
    for j in range(n):
        maxW = 1 - abs(i - j) / n
        W[i, j] = max(maxW - round(random.random() * randomness, 2), 0)

W = np.round(W, 2)
df = pd.DataFrame(W)
df.to_csv('weights.csv')