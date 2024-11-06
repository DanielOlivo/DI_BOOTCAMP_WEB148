matrix = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

lines = matrix.split('\n')[1:]

width = len(lines[0])
height = len(lines)

message = ""
for col in range(0, width):
    for row in range(0, height):
        letter = lines[row][col]
        if letter.isalpha():
            message += letter
        else:
            message += ' '

print(message)