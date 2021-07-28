n = 5
a = []
a1 = j1 = None
count = 0
for i in range(n):
    a.append(list(map(int, input().split())))


#Находим координаты единицы a1,j1
for i in range(len(a)):
    for j in range(len(a[i])):
        if a[i][j] == 1:
            a1, j1 = i, j

if a1 < 2:
    while a1 < 2:
        a1 += 1
        count += 1
if a1 > 2:
    while a1 > 2:
        a1 -= 1
        count += 1
if j1 < 2:
    while j1 < 2:
        j1 += 1
        count += 1
if j1 > 2:
    while j1 > 2:
        j1 -= 1
        count += 1

# #Выводим матрицу
# for i in range(n):
#     for j in range(n):
#         print(a[i][j], end=' ')
#     print()

print(count)

