class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.pos = 0

    def getVisibleItems(self):
        return self.items[self.pos: self.pos + self.pageSize]

    def prevPage(self):
        self.pos -= self.pageSize
        if self.pos < 0:
            self.pos = 0
        return self

    def nextPage(self):
        self.pos += self.pageSize
        if self.pos > len(self.items) - self.pageSize:
            self.pos = len(self.items) - self.pageSize
        return self

    def firstPage(self):
        self.pos = 0
        return self

    def lastPage(self):
        self.pos = len(self.items) - self.pageSize
        return self

    def goToPage(self, page):
        self.pos = (page - 1) * self.pageSize

        if self.pos < 0:
            self.pos = 0
        elif self.pos > len(self.items) - self.pageSize:
            self.pos = len(self.items) - self.pageSize

        return self
        

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

p.firstPage()
for _ in range(0,10):
    print(p.getVisibleItems())
    p.nextPage()


p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.firstPage()
p.getVisibleItems()
p.goToPage(3)
p.getVisibleItems()
p.firstPage().nextPage().nextPage().getVisibleItems()
