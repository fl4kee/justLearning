n = int(input())
names = []
names_dict = {}
for i in range(n):
    names.append(input())
# print(names)

for i in range(n):
    if names[i] in names_dict.values():
        names_dict[i] = f'{names[i]}{i+1}'
    names_dict[i] = names[i]
print(names_dict)