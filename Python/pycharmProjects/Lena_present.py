n = int(input())
z = 0
middle = []
while z <= n:
    middle.append(z)
    z += 1

z = n - 1
while z >= 0:
    middle.append(z)
    z -= 1

minus_middle = middle
for i in range(len(middle)):
    middle[i] -= n

x = []
for i in range(n):
    for l in minus_middle:
        if l < 0 and len(x) < (n * 2 + 2) / 2:
            x.append(' ')
        elif l < 0:
            x.append('')
        else:
            x.append(str(l))
    print(' '.join(x[0:x.index('')]))
    x = []
    for z in range(len(minus_middle)):
        minus_middle[z] = minus_middle[z] + 1

for i in range(n + 1):
    for l in minus_middle:
        if l < 0 and len(x) < (n * 2 + 2) / 2:
            x.append(' ')
        elif l < 0:
            x.append('')
        else:
            x.append(str(l))
    if '' in x:
        print(' '.join(x[0:x.index('')]))
    else:
        print(' '.join(x))
    x = []
    for z in range(len(minus_middle)):
        minus_middle[z] = minus_middle[z] - 1
