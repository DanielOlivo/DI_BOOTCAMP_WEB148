cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars_list = cars.split(', ')
print('total companies: ', len(cars_list))
print('companies in descending order: ', sorted(cars_list, reverse=True))
print("how many have 'o' letter: ", len([car for car in cars_list if 'o' in car]))
print("how many have no 'i' letter: ", len([car for car in cars_list if not 'i' in car]))


new_list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
no_duplicates = set(new_list)
print("companies: ", ', '.join(no_duplicates))
print('companies ascending and reverse: ', ', '.join(company[::-1] for company in sorted(list(no_duplicates))))
