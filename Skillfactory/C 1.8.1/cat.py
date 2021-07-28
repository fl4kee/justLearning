class Cat:
    def __init__(self, name='', gender='', age=0):
        self.name = name
        self.gender = gender
        self.age = age

    def init_from_dict(self, cat_dict):
        self.name = cat_dict.get("name")
        self.gender = cat_dict.get("gender")
        self.age = cat_dict.get("age")

    def show_info(self):
        print(
            f'Имя: {self.name}, Пол: {self.gender}, Возраст: {self.age}')
