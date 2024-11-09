import psycopg2
from menu_item import MenuItem

class MenuManager:

    connection = None

    @classmethod
    def apply(cls, query, toreturn=False):
        cursor = cls.connection.cursor()
        cursor.execute(query)
        if toreturn:
            result = cursor.fetchall()
            return result


    @classmethod
    def get_by_name(cls, name):
        query = f"select item_name, item_price from menu_items where item_name='{name}';"
        result = MenuManager.apply(query, True)
        if result is None or not result:
            return None
        elif isinstance(result, list):
            return MenuItem(result[0][0], result[0][1])
        else:
            return MenuItem(result[0], result[1])

    @classmethod
    def all(cls):
        query = f"select item_name, item_price from menu_items;"
        return [MenuItem(name, cost) for name, cost in MenuManager.apply(query, True)]

    @classmethod
    def delete_all(cls):
        query = f"delete from menu_items;"

    

# MenuItem.connection = psycopg2.connect(host='localhost', user='daniel', password='1234', dbname='restaurant')
# MenuManager.connection = MenuItem.connection

# MenuManager.delete_all()

# item = MenuItem('Burger', 35)
# item.save()
# print('save')
# print(MenuManager.all())

# print('delete')
# item.delete()
# print(MenuManager.all())

# print('update')
# item.update('Veggie Burger', 37)
# item.save()
# print(MenuManager.all())


# print('get by name')
# item2 = MenuManager.get_by_name('Beef Stew')
# print(item2)
# items = MenuManager.all()

# print('all')
# print(items)


# MenuItem.connection.close()