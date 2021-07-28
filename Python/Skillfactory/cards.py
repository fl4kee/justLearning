n = int(input())
numbers = list(map(int,input().split()))
answer = []

average = int(sum(numbers)/(n/2))

for i in range(n):
    for j in range(n):
        if numbers[i] + numbers[j] == average and i != j:
            print(i + 1, j + 1)
            numbers[i] = numbers[j] = 0
            break

