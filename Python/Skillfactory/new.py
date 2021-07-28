def free_space(x, y, z):
    if x == ['R'] or x == ['r']:
        return x
    elif y[int(x[0]) + 1][int(x[1]) + 1] != '-':
        while y[int(x[0]) + 1][int(x[1]) + 1] != '-':
            x = list(map(str, input('(R чтобы начать заново) Место занято, введи другие координаты: ').split()))
    y[int(x[0]) + 1][int(x[1]) + 1] = z
    return y


def win_cond(x, y):
    return y[1][1] == y[1][2] == y[1][3] == x or y[2][1] == y[2][2] == y[2][3] == x or \
           y[3][1] == y[3][2] == y[3][3] == x or y[1][1] == y[2][1] == y[3][1] == x or \
           y[1][2] == y[2][2] == y[3][2] == x or y[1][3] == y[2][3] == y[3][3] == x or \
           y[1][1] == y[2][2] == y[3][3] == x or y[3][1] == y[2][2] == y[1][3] == x


while True:
    count = 0
    field = []
    for i in range(3):  # Создание поля для игры
        field.append([i])
        for j in range(4):
            field[i].append('-')
    field = [[' ', 0, 1, 2]] + field

    for i in range(4):  # Вывод поля для игры
        for j in range(4):
            print(field[i][j], end=' ')
        print()

    cross_or_zeroes = input('Будете ставить крестики или нолики: ')
    if cross_or_zeroes == 'x' or cross_or_zeroes == 'X':  # Определяет кто ходит первым
        while True:
            # Ввод координат для хода или рестарт
            cross = list(
                map(str, input('(R чтобы начать заново) Ход "Крестиков" введите, координаты: ').split()))
            if cross == ['R'] or cross == ['r']:
                break
            free_space(cross, field, 'x')  # Функция изменяющая поле если есть свободное место
            count += 1
            # Вывод поля после сделанного хода
            for i in range(4):
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if win_cond('x', field):
                print('Крестики победили!!')
                break
            elif count == 9:
                print('Ничья')
                break
            # Ввод координат для хода или рестарт
            zero = list(map(str, input('(R чтобы начать заново) Ход "Ноликов" введите, координаты: ').split()))
            if zero == ['R'] or zero == ['r']:
                break
            free_space(zero, field, 'o')  # Функция изменяющая поле если есть свободное место
            count += 1
            # Вывод поля после сделанного хода
            for i in range(4):
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            if win_cond('o', field):  # Проверка победного условия
                print('Нолики победили!!')
                break
            elif count == 9:
                print('Ничья')
                break
        again = input('Сыграть еще раз?(N/Y)')
        if again == 'Y':
            continue
        else:
            break
    # Определяет кто ходит первым
    elif cross_or_zeroes == 'o' or cross_or_zeroes == 'O' or cross_or_zeroes == '0':
        # Проверяет остались ли свободные места в поле?
        while any('-' in sub for sub in field):
            # Ввод координат для хода или рестарт
            zero = list(
                map(str, input(
                    '(R чтобы начать заново) Ход "Ноликов" введите, координаты: ').split()))
            if zero == ['R'] or zero == ['r']:
                break
            free_space(zero, field, 'o')  # Функция изменяющая поле если есть свободное место
            count += 1
            for i in range(4):  # Вывод поля после сделанного хода
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if win_cond('o', field):
                print('Нолики победили!!')
                break
            elif count == 9:
                print('Ничья')
                break
            # Ввод координат для хода или рестарт
            cross = list(
                map(str, input(
                    '(R чтобы начать заново)Ход "Крестиков", введите, координаты: ').split()))
            if cross == ['R'] or cross == ['r']:
                break
            free_space(cross, field, 'x')
            count += 1
            # Вывод поля после сделанного хода
            for i in range(4):
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if win_cond('x', field):
                print('Крестики победили!!')
                break
            elif count == 9:
                print('Ничья')
                break
        again = input('Сыграть еще раз?(N/Y)')
        if again == 'Y':
            continue
        else:
            break
    else:
        print("Введи крестик или нолик")
        continue