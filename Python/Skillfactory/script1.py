array = [2, 3, 1, 4, 6, 5, 9, 8, 10]


def merge_two_list(a, b):
    c = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] < b[j]:
            c.append(a[i])
            i += 1
        else:
            c.append(b[j])
            j += 1
    if i < len(a):
        c += a[i:]
    if j < len(b):
        c += b[j:]
    return c


def merge_sort(x):
    if len(x) == 1:
        return x
    middle = len(x) // 2
    left = merge_sort(x[:middle])
    right = merge_sort(x[middle:])
    return merge_two_list(left, right)


print(merge_sort(array))
