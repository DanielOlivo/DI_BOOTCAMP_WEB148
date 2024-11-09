import psycopg2
import re
from menu_item import MenuItem
from menu_manager import MenuManager


def handle_digits(message):
    while True:
        user_input = input(message)
        m = re.search("^\s*\d+\s*$", user_input)
        if not m:
            print("failed to parse; try again")
        else:
            return int(user_input)

def add_item():
    print("add item:") 
    name = input("name: ")
    price = handle_digits("price: ")
    item = MenuItem(name, price)
    item.save()
    print(f'item {item} was added')

def delete_item():
    print("delete item: ")
    name = input("name: ")
    item = MenuManager.get_by_name(name)
    if item is None:
        print(f"item with name {name} not found")
    else:
        print(item)
        item.delete()

def update_item():
    print("update item")
    name1 = input("item name to update: ")
    item = MenuManager.get_by_name(name1)

    if item is None:
        print(f"item with name {name1} not found")
        return

    name2 = input("new name: ")
    price = handle_digits("new cost: ")
    item.update(name2, price)
    print('item updated successfully')

def view_item():
    print("view item: ")
    name = input("item to view: ")
    item = MenuManager.get_by_name(name)

    if item is None:
        print(f"item with name {name} not found")
        return

    print(item)


def show_menu():
    print("all items: ")
    for item in MenuManager.all():
        print(item)

def show_user_menu():
    connection = psycopg2.connect(host='localhost', user='daniel', password='1234', dbname='restaurant')
    MenuItem.connection = connection
    MenuManager.connection = connection

    cmds="""\t\tMenu
        (v)iew an item
        (a)add an item
        (d)elete an item
        (u)pdate an item
        (s)how the menu
        e(x)it
    """

    try:
        while True:
            print(cmds)

            user_input = input().lower().strip()

            if user_input not in ['v', 'a', 'd', 'u', 's', 'x']:
                print("try again")
                continue

            if user_input == 'x':
                print("buy")
                break
            elif user_input == 'v':
                view_item()
            elif user_input == 'a':
                add_item()
            elif user_input == 'd':
                delete_item()
            elif user_input == 'u':
                update_item()
            elif user_input == 's':
                show_menu()
    finally:
        connection.close()

if __name__ == "__main__":
    show_user_menu()