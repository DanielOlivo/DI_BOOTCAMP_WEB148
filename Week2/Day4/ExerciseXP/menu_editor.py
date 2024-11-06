from menu_manager import MenuManager

def load_manager():
    return MenuManager()

def add_item_to_menu(manager: MenuManager):
    while True:
        try:
            name = input("name: ")
            price = float(input("price: "))
            manager.add_item(name, price)
            print("item was added successfully")
            return
        except ValueError:
            print('failed to parse price')

def remove_item_from_menu(manager: MenuManager):
    name = input("item name to remove: ")
    len1 = len(manager.menu['items'])
    manager.remove_item(name)
    len2 = len(manager.menu['items'])
    if len1 == len2:
        print("failed to remove the item")
    else:
        print("item removed successfully")

def show_restaurant_menu(manager):
    print("\tRestaurant menu:")
    print('\n'.join(i['name'] + " : " + str(i['price']) for i in manager.menu['items']))

# manager = MenuManager()
# show_restaurant_menu(manager)

def show_user_menu():
    while True:
        print("\tMenu")
        print("(a)dd an item")
        print("(d)elete an item")
        print("(v)iew the menu")
        print("e(x)it")

        userinput = input("\t:").lower().strip()

        if not userinput in ['a', 'd', 'v', 'x']:
            print("failed to proceed")
        else:
            return userinput


if __name__ == "__main__":
    manager = load_manager()
    onrun = True

    while onrun:
        menu_choice = show_user_menu()

        if menu_choice == 'x':
            onrun = False
            print("buy")
        elif menu_choice == 'a':
            add_item_to_menu(manager)
        elif menu_choice == 'd':
            remove_item_from_menu(manager)
        elif menu_choice == 'v':
            show_restaurant_menu(manager)
        else:
            print("failed to procceed")


    