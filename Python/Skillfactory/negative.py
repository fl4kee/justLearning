n, m = map(int, input().split())
a = []
b = []
count = 0
for i in range(n):
    a.append(list(map(str, input().split())))
    a[i] = list(*a[i])
input()
for i in range(n):
    b.append(list(map(str, input().split())))
    b[i] = list(*b[i])

for i in range(len(a)):
    for j in range(len(a[i])):
        if a[i][j] == b[i][j]:
            count += 1

print(count)
