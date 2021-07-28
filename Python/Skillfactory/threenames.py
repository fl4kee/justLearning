class Client:
    def __init__(self, name=None):
        self.name = name

    def get_name(self):
        return self.name


class Guests(Client):
    def __init__(self, adress=None, status=None):
        super().__init__()
        self.adress = adress
        self.status = status

    def get_adress(self):
        return self.adress

    def get_status(self):
        return self.status


clients = []
db = [{'name': 'Коля',
       'adress': 'Москва',
       'status': 'Ментор'
       },
      {'name': 'Петя',
       'adress': 'Орел',
       'status': 'Наставник'}
      ]

print('Список приглашенных гостей')

for i in db:
    client = Guests()
    client.name = i.get('name')
    client.adress = i.get('adress')
    client.status = i.get('status')
    print(f'{client.name}, г. {client.adress}, статус {client.status}')
