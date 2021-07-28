from cat import Cat

cats = [
    {
     "name": "Барон",
     "gender" : "Девочка",
     "age": "2 года"
    },
    {
     "name": "Сэм",
     "gender" : "Мальчик",
     "age": "2 года",
    }
]

for cat in cats:
    cat_obj = Cat()
    cat_obj.init_from_dict(cat)
    cat_obj.show_info()
