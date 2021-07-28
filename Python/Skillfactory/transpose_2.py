n = int(input())
a = []
a1 = []
for i in range(n):
    a.append(list(map(int, input().split())))
for i in range(n):
    a1.append([])
    for k in range(n):
        a1[i].append(0)

for i in range(len(a)):
    a[i] = a[i][::-1]

for z in range(n):
    for j in range(n):
        if z == j:
            a1[z][j] += a[z][j]
        elif z < j:
             a1[z][j] += a[j][z]
        elif z > j:
             a1[z][j] += a[j][z]

for i in range(len(a1)):
    a1[i] = a1[i][::-1]

for i in range(n):
    for j in range(n):
        print(a1[i][j], end=' ')
    print()

