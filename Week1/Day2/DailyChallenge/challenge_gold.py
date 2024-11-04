from datetime import datetime

birthday = datetime.strptime(input("bitrhday: "), "%d/%m/%Y")
# birthday = datetime.strptime("28/3/1992", "%d/%m/%Y")

candles = birthday.day % 10
padding_left = (9 - candles) // 2
padding_right = 9 - candles - padding_left
candles_line = ' ' * 7 + '_' * (2 + padding_left) + 'i' * candles + '_' * (padding_right)

rest = """
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~"""

print(candles_line + rest)