import numpy as np
import pandas as pd
import random
from scrape import getCourseData

courseCodes = pd.read_csv('courseCodes.txt', sep="\n", header=None).values
courseCodes = courseCodes.reshape(-1)
n = len(courseCodes)

df = pd.DataFrame(columns=courseCodes)
for code in courseCodes:
    df[code] = getCourseData(code)


# less random
# W(i, j) values are random (uniformly distributed)
# from minWeight = max(maxWeight - randomness, 0)
# to maxWeight = 1 - abs(i - j) / n
randomness = 0.4
W = np.zeros((n, n))
for i in range(n):
    for j in range(n):
        maxW = 1 - abs(i - j) / n
        W[i, j] = max(maxW - round(random.random() * randomness, 2), 0)

W = np.round(W, 2)

wdf = pd.DataFrame(W)
wdf.columns = courseCodes

df = pd.concat([df, wdf], ignore_index=True)
df.to_csv('weights.csv', sep=';')

# more random
# W(i, j) values are random (uniformly distributed)
# values from 0 to maxWeight = 1 - abs(i - j) / n
# W = np.zeros((n, n))
# for i in range(n):
#     for j in range(n):
#         maxW = 1 - abs(i - j) / n
#         W[i, j] = round(maxW * random.random(), 2)