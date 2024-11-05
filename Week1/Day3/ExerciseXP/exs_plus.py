import statistics

# exercise 1: student grade summary
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = dict((name, int(statistics.mean(grades))) for name, grades in student_grades.items())

def get_letter(grade):
    if grade >= 90:
        return 'A'
    elif grade >= 80:
        return 'B'
    elif grade >= 70:
        return 'C'
    elif grade >= 60:
        return 'D'
    else:
        return 'F'

student_letter_grades = dict((name, get_letter(grade)) for name, grade in student_averages.items())

class_average = int(statistics.mean(student_averages.values()))

# for name in student_grades.keys():
#     print(f"{name}: {student_averages[name]} ({student_letter_grades[name]})")



# exercise 2: Advanced Data Manipulation and analysis
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_sales = dict()
for item in sales_data:
    if not item['product'] in total_sales.keys():
        total_sales[item['product']] = 0
    total_sales[item['product']] += item['price'] * item['quantity']
# print(total_sales)

customer_spending = dict()
for item in sales_data:
    if not item['customer_id'] in customer_spending.keys():
        customer_spending[item["customer_id"]] = 0
    customer_spending[item["customer_id"]] += item['price'] * item["quantity"]
# print(customer_spending)

for item in sales_data:
    item['total_price'] = item["quantity"] * item["price"]

# print(sales_data[0])

high_value_transactions = [item for item in sales_data if item['total_price'] > 500]
high_value_transactions = sorted(high_value_transactions, key=lambda i: -i['total_price'])
# print(high_value_transactions)

loyal = dict()
for item in sales_data:
    if not item['customer_id'] in loyal.keys():
        loyal[item['customer_id']] = 0
    loyal[item['customer_id']] += 1
loyal = dict((k,v) for k,v in loyal.items() if v > 1)
# print(loyal)

# 6
smartphone_avg = int(statistics.mean([item['total_price'] for item in sales_data if item['product'] == "Smartphone"]))
laptop_avg = int(statistics.mean([item['total_price'] for item in sales_data if item['product'] == "Laptop"]))
headphone_avg = int(statistics.mean([item['total_price'] for item in sales_data if item['product'] == "Headphones"]))

# print(smartphone_avg)
# print(laptop_avg)
# print(headphone_avg)