n,m = map(int,input().split())
a = []
a1 = []
for i in range(n):
    a.append(list(map(int, input().split())))
for i in range(n):
    a1.append([])
    for k in range(m):
        a1[i].append(0)


for i in range(len(a)):
    a[i] = a[i][::-1]

for i in range(n):
    for j in range(m):
        print(a[i][j], end=' ')
    print()

