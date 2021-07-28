USERS = ['admin', 'guest', 'director', 'root', 'superstar']
yesno = input("""Введите Y, если хотите авторизоваться или N,
                если хотите продолжить работу как анонимный пользователь: """)
username = input('Введите имя пользователя: ')

auth_2 = username in USERS
auth = yesno == "Y"


def is_auth(func):
    def wrapper():
        if auth:
            func()
        else:
            print("Пользователь неавторизован. Функция выполнена не будет")
    return wrapper

def has_access(func):
    def wrapper():
        if auth_2:
            print("Пользователь авторизован")
            func()
        else:
            print("Пользователь неавторизован. Функция выполнена не будет")

    return wrapper

@is_auth
@has_access
def from_db():
    print("some data from database")


from_db()
