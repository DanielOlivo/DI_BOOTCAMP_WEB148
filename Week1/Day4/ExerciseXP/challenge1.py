def countcharacter(s, ch):
    return sum(c == ch for c in s)

print(countcharacter("Programming is cool!", "o"))