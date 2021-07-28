n = int(input())
a = []
a1 = []
for i in range(n):
    a.append(list(map(int, input().split())))



for i in range(n):
    for j in range(2):
        print(a[i][j], end=' ')
    print()

#
# for i in range(m):
#     for j in range(n):
#         if a[i][1] == a[j][0]:
#             count+=1
#
# print(count)