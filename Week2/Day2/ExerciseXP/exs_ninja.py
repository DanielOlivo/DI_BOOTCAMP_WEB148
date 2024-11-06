from typing import Self, Tuple

# game of life

class Grid:

    def __init__(self, cells: set[Tuple[int, int]], borders = None):
        self.alive = cells # tuple coords set
        self.near_coords = [
            (-1, -1), (-1, 0), (-1, 1),
            ( 0, -1),          ( 0, 1),
            ( 1, -1), ( 1, 0), ( 1, 1)
        ]
        self.top = borders[0] if borders else None
        self.right = borders[1] if borders else None
        self.bottom = borders[2] if borders else None
        self.left = borders[3] if borders else None
        

    def get_dead(self):
        for y,x in self.alive:
            for dy, dx in self.near_coords:
                coord = (y + dy, x + dx)
                if not coord in self.alive and self.within_borders(coord): 
                    yield coord

    def get_count_near(self, coord):
        y, x = coord
        count = 0
        for dy, dx in self.near_coords:
            coord = (y + dy, x + dx)
            if coord in self.alive:
                count += 1
        return count

    def within_borders(self, cell):
        if self.top is None:
            return True
        y, x = cell
        return y >= self.bottom and y <= self.top and x >= self.left and x <= self.right


    def next_state(self):
        keep_alive_cond = lambda amount: amount >= 2 and amount <= 3
        keep_alive = set(cell for cell in self.alive if keep_alive_cond(self.get_count_near(cell)) and self.within_borders(cell))

        dead = set(self.get_dead())
        will_reborn = set(cell for cell in dead if self.get_count_near(cell) == 3)

        return keep_alive.union(will_reborn)

    def iterate(self, n = 1):
        for _ in range(0, n):
            self.alive = self.next_state()

    def show(self, borders=(-10, 10, 10, -10), time_interval=None):
        screen = []
        top, right, bottom, left = borders
        for row in range(top, bottom + 1):
            screen.append(''.join('X' if (row, x) in self.alive else ' ' for x in range(left, right + 1)))
        screen = '\n'.join(screen)
        print(screen)
    

state = set([(0,0), (0,1), (0,-1), (1,0), (-1,0)])
grid = Grid(state)
grid.show()
grid.iterate()
grid.show()
grid.iterate(n=100)
grid.show()
grid.iterate()
