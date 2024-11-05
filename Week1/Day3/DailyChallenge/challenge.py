# challenge 1
def word2dict(word):
    result = dict()
    for i, letter in enumerate(word):
        if not letter in result.keys():
            result[letter] = []
        result[letter].append(i)
    return result

word2dict("dodo")
word2dict("froggy")
word2dict("grapes")



# challenge 2
def can_afford(items, wallet):
    result = sorted(item for item, cost in items.items() if wallet >= cost)
    return 'Nothing' if not result else result

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
wallet = "$300"
# print(can_afford(items_purchase, wallet))

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}
wallet = "$1" 
# print(can_afford(items_purchase, wallet))