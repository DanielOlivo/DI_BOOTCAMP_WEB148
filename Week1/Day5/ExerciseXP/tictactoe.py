grid = [] # the board

counters = { # counters for local calculations
    0: 0,
    1: 0,
    2: 0
} 

def resetcounters():
    global counters
    counters[0] = 0
    counters[1] = 0
    counters[2] = 0

def resetgrid():
    global grid
    grid = []
    for row in range(0,3):
        grid.append([0,0,0])

def setx(row, col):
    global grid 
    grid[row][col] = 1

def seto(row, col):
    global grid 
    grid[row][col] = 2


def getrow(row):
    """returns values from row"""
    global grid
    for col in range(0,3):
        yield grid[row][col]

def getcol(col):
    """returns values from column"""
    global grid
    for row in range(0,3):
        yield grid[row][col]

def getdiag1():
    global grid
    for i in range(0,3):
        yield grid[i][i]

def getdiag2():
    global grid 
    for i in range(0, 3):
        yield grid[i][2 - i]

def checkseq(seq):
    global counters
    resetcounters()
    for i in seq:
        counters[i] += 1
    if counters[1] == 3:
        return 1
    elif counters[2] == 3:
        return 2
    else:
        return None

def isparity():
    global grid
    for row in grid:
        for col in row:
            if col == 0:
                return False
    return True

def getwinner():
    if isparity():
        return 0

    for row in range(0,3):
        result = checkseq(getrow(row))
        if not result is None:
            return result

    for col in range(0,3):
        result = checkseq(getrow(col))
        if not result is None:
            return result

    result = checkseq(getdiag1())
    if not result is None:
        return result

    result = checkseq(getdiag2())
    if not result is None:
        return result

    return None

    
def cell2str(num):
    if num == 1:
        return ' X '
    elif num == 2:
        return ' O '
    else:
        return '   '

def show():
    global grid
    separator = "---+---+---"

    top = '|'.join(cell2str(num) for num in grid[0])
    middle = '|'.join(cell2str(num) for num in grid[1])
    bottom = '|'.join(cell2str(num) for num in grid[2])

    total = '\n'.join([top, separator, middle, separator, bottom])
    print(total)

def getturnstr(player):
    return "Turn: " + ('X' if player == 1 else 'O')

def parseinput(s):
    return int(s[0]), int(s[2])

def board():
    """an actual game
    Returns: the winner, i.e. 1 or 2, or 0 if parity
    """
    turn = 1
    onrun = True
    resetgrid()

    while onrun:
        show()
        print(getturnstr(turn))
        userinput = input("<row> <col>; <parity>: " )
        if userinput.lower() == "parity":
            show()
            print("Parity!")
            return 0
        row, col = parseinput(userinput)
        if turn == 1:
            setx(row, col)
        else:
            seto(row, col)

        winner = getwinner()

        if winner == 0:
            show()
            print(f"Parity!")
            return 0
        elif winner == 1 or winner == 2:
            show()
            print(f"We have a winner: Player {turn}")
            return winner

        turn = 1 if turn == 2 else 2

# board()

def rungame():

    summaries = []

    print("welcome to tictactoe game")
    print("Player 1: X\nPlayer 2: O")

    while True:
        cmd = input('quit or just type anything: ')

        if cmd == 'quit':
            print('Your summaries: ')
            player1wins = len([s for s in summaries if s == 1])
            player2wins = len([s for s in summaries if s == 2])
            parities = len([s for s in summaries if s == 0])
            print(f"Player 1 wins: {player1wins}")
            print(f"Player 2 wins: {player2wins}")
            print(f'Parities: {parities}')
            print('buy') 
            break

        summaries.append(board())

rungame()