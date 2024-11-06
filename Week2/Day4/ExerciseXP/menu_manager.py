import json

class MenuManager:

    def __init__(self):
        self.menu = None
        self.__path = "./Week2/Day4/ExerciseXP/restaurant_menu.json"
        with open(self.__path, 'r') as f:
            self.menu = json.load(f)

    def add_item(self, name, price):
        self.menu['items'].append({'name': name, 'price' : price})

    def remove_item(self, name):
        self.menu['items'] = [item for item in self.menu['items'] if item['name'] != name]

    def save_to_file(self):
        with open(self.__path,'w') as f:
            f.write(json.dumps(self.menu, indent=4)) 