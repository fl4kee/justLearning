


while True:
    count = 0
    # Создание поля для игры
    field = []
    for i in range(3):
        field.append([i])
        for j in range(4):
            field[i].append('-')
    field = [[' ', 0, 1, 2]] + field
    # Вывод поля
    for i in range(4):
        for j in range(4):
            print(field[i][j], end=' ')
        print()

    cross_or_zeroes = input('Будете ставить крестики или нолики: ')
    # Определяет кто ходит первым
    if cross_or_zeroes == 'x' or cross_or_zeroes == 'X':
        while True:
            # Ввод координат для хода или рестарт
            cross = list(
                map(str, input(
                    '(R чтобы начать заново) Ход "Крестиков" введите, координаты: ').split()))
            if cross == ['R'] or cross == ['r']:
                break
            elif field[int(cross[0]) + 1][
                int(cross[1]) + 1] != '-':
                while field[int(cross[0]) + 1][
                    int(cross[1]) + 1] != '-':
                    cross = list(
                        map(str, input(
                            '(R чтобы начать заново) Место занято, введи другие координаты: ').split()))

            # Изменяет поле в соответствеии с указанными координатами
            field[int(cross[0]) + 1][
                int(cross[1]) + 1] = 'x'
            count += 1
            # Вывод поля после сделанного хода
            for i in range(4):
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if field[1][1] == field[1][2] == field[1][3] == 'x' or field[2][1] == field[2][2] == field[2][3] == 'x' or \
                    field[3][1] == field[3][2] == field[3][3] == 'x' or field[1][1] == field[2][1] == field[3][
                1] == 'x' or \
                    field[1][2] == field[2][2] == field[3][2] == 'x' or field[1][3] == field[2][3] == field[3][
                3] == 'x' or \
                    field[1][1] == field[2][2] == field[3][3] == 'x' or field[3][1] == field[2][2] == field[1][
                3] == 'x':
                print('Крестики победили!!')
                break
            elif count == 9:
                print('Ничья')
                break
            # Ввод координат для хода или рестарт
            zero = list(
                map(str, input(
                    '(R чтобы начать заново) Ход "Ноликов" введите, координаты: ').split()))
            if zero == ['R'] or zero == ['r']:
                break
            elif field[int(zero[0]) + 1][
                int(zero[1]) + 1] != '-':
                while field[int(zero[0]) + 1][
                    int(zero[1]) + 1] != '-':
                    zero = list(
                        map(str, input(
                            '(R чтобы начать заново) Место занято, введи другие координаты: ').split()))
                # Изменяет поле в соответствеии с указанными координатами
            field[int(zero[0]) + 1][
                int(zero[1]) + 1] = 'o'
            count += 1
            # Вывод поля после сделанного хода
            for i in range(4):
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if field[1][1] == field[1][2] == field[1][3] == 'o' or field[2][1] == field[2][2] == field[2][3] == 'o' or \
                    field[3][1] == field[3][2] == field[3][3] == 'o' or field[1][1] == field[2][1] == field[3][
                1] == 'o' or \
                    field[1][2] == field[2][2] == field[3][2] == 'o' or field[1][3] == field[2][3] == field[3][
                3] == 'o' or \
                    field[1][1] == field[2][2] == field[3][3] == 'o' or field[3][1] == field[2][2] == field[1][
                3] == 'o':
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
            elif field[int(zero[0]) + 1][
                int(zero[1]) + 1] != '-':
                while field[int(zero[0]) + 1][
                    int(zero[1]) + 1] != '-':
                    zero = list(
                        map(str, input(
                            '(R чтобы начать заново) Место занято, введи другие координаты: ').split()))
                # Изменяет поле в соответствеии с указанными координатами
            field[int(zero[0]) + 1][
                int(zero[1]) + 1] = 'o'
            count += 1
            for i in range(4):  # Вывод поля после сделанного хода
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if field[1][1] == field[1][2] == field[1][3] == 'o' or field[2][1] == field[2][2] == field[2][3] == 'o' or \
                    field[3][1] == field[3][2] == field[3][3] == 'o' or field[1][1] == field[2][1] == field[3][
                1] == 'o' or \
                    field[1][2] == field[2][2] == field[3][2] == 'o' or field[1][3] == field[2][3] == field[3][
                3] == 'o' or \
                    field[1][1] == field[2][2] == field[3][3] == 'o' or field[3][1] == field[2][2] == field[1][
                3] == 'o':
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
            elif field[int(cross[0]) + 1][
                int(cross[1]) + 1] != '-':
                while field[int(cross[0]) + 1][
                    int(cross[1]) + 1] != '-':
                    cross = list(
                        map(str, input(
                            '(R чтобы начать заново) Место занято, введи другие координаты: ').split()))

            # Изменяет поле в соответствеии с указанными координатами
            field[int(cross[0]) + 1][
                int(cross[1]) + 1] = 'x'
            count += 1
            # Вывод поля после сделанного хода
            for i in range(4):
                for j in range(4):
                    print(field[i][j], end=' ')
                print()
            # Проверка победного условия
            if field[1][1] == field[1][2] == field[1][3] == 'x' or field[2][1] == field[2][2] == field[2][3] == 'x' or \
                    field[3][1] == field[3][2] == field[3][3] == 'x' or field[1][1] == field[2][1] == field[3][
                1] == 'x' or \
                    field[1][2] == field[2][2] == field[3][2] == 'x' or field[1][3] == field[2][3] == field[3][
                3] == 'x' or \
                    field[1][1] == field[2][2] == field[3][3] == 'x' or field[3][1] == field[2][2] == field[1][
                3] == 'x':
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
