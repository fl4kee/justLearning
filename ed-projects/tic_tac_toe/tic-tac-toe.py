def free_space(x, y, z):  # Функция изменяющая поле если есть свободное место
    if y[int(x[0]) + 1][int(x[1]) + 1] != '-':
        while y[int(x[0]) + 1][int(x[1]) + 1] != '-':
            x = list(map(str, input('(R чтобы начать заново) Место занято, введи другие координаты: ').split()))
    y[int(x[0]) + 1][int(x[1]) + 1] = z
    return y


def inp():  # Ввод координат для хода или рестарт
    while True:
        x = list(map(str, input().split()))
        if len(x) == 2 and 0 <= int(x[0]) < 3 and 0 <= int(x[1]) < 3:
            return x
        else:
            print('Введи две координаты в диапазоне от 0 до 2-х включительно')


def win_cond(x, y):  # Проверка победного условия
    return y[1][1] == y[1][2] == y[1][3] == x or y[2][1] == y[2][2] == y[2][3] == x or \
           y[3][1] == y[3][2] == y[3][3] == x or y[1][1] == y[2][1] == y[3][1] == x or \
           y[1][2] == y[2][2] == y[3][2] == x or y[1][3] == y[2][3] == y[3][3] == x or \
           y[1][1] == y[2][2] == y[3][3] == x or y[3][1] == y[2][2] == y[1][3] == x


def start_field():
    field = []
    for i in range(3):  # Создание поля для игры
        field.append([i])
        for j in range(4):
            field[i].append('-')
    return [[' ', 0, 1, 2]] + field


def show_field(x):  # Вывод поля для игры
    for i in range(4):
        for j in range(4):
            print(x[i][j], end=' ')
        print()


def x_turn(a):
    print('(R чтобы начать заново) Ход "Крестиков" введите, координаты: ')
    cross = inp()
    if cross == ['R'] or cross == ['r']:
        return 0
    free_space(cross, a, 'x')
    show_field(a)
    if win_cond('x', a):
        print('Крестики победили!!')
        return 0


def o_turn(a):
    print('(R чтобы начать заново) Ход "Ноликов" введите, координаты: ')
    zero = inp()
    if zero == ['R'] or zero == ['r']:
        return 0
    free_space(zero, a, 'o')
    show_field(a)
    if win_cond('o', a):
        print('Нолики победили!!')
        return 0


while True:
    result = None
    count = 0
    field = start_field()
    show_field(field)
    cross_or_zeroes = input('Будете ставить крестики или нолики: ')
    if cross_or_zeroes == 'x' or cross_or_zeroes == 'X':  # Определяет кто ходит первым
        while True:
            if count % 2 == 0:
                result = x_turn(field)
                count += 1
                if result == 0:
                    break
            elif count == 9:
                print('Ничья')
                break
            if count % 2 != 0:
                result = o_turn(field)
                count += 1
                if result == 0:
                    break

        again = input('Сыграть еще раз?(N/Y)')
        if again == 'Y':
            continue
        else:
            break

    elif cross_or_zeroes == 'o' or cross_or_zeroes == 'O' or cross_or_zeroes == '0':
        while True:
            if count % 2 == 0:
                result = o_turn(field)
                count += 1
                if result == 0:
                    break
            elif count == 9:
                print('Ничья')
                break
            if count % 2 != 0:
                result = x_turn(field)
                count += 1
                if result == 0:
                    break

        again = input('Сыграть еще раз?(N/Y)')
        if again == 'Y':
            continue
        else:
            break
    else:
        print("Введи крестик или нолик")
        continue
