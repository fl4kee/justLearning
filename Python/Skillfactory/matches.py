class Car:
    def __init__(self,year, make, model):
        self.year = year
        self.make = make
        self.model = model

    def how_old(self):
        return 2020 - self.year

car_ = Car(1920, 'Cho', 'Ford')

print(car_.how_old())