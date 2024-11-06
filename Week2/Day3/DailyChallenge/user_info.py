
def handle_input():
    result = []
    for _ in range(0, 5):
        userinput = input("<name> <age> <score>: ").split(' ')
        result.append((userinput[0], int(userinput[1]), int(userinput[2])))
    return result

srt = sorted(handle_input(), key=lambda info: (info[0], info[1], info[2]))
print(srt)