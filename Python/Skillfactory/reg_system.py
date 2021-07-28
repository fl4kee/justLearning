n = int(input())
names = []
for i in range(n):
    names.append(input())
n_dict = dict.fromkeys(names, 0)


# print(n_dict)

for i in range(len(names)):
    if names[i] in n_dict.keys():
        n_dict[names[i]] += 1
    if n_dict[names[i]] - 1 == 0:
        print('OK')
    else:
        print(names[i] + str(n_dict[names[i]] - 1))