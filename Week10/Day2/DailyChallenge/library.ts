interface Book {
    title: string 
    author: string 
    isbn: string 
    publishedYear: number
    genre?: string
}

class Library {

    // private books: Book[] = []
    protected books: Book[] = []

    public addBook(book: Book): void {
        this.books.push(book)
    }

    public getBookDetails(isbn: string): Book | string {
        const idx = this.books.findIndex(book => book.isbn == isbn)
        if(idx == -1)
            return 'failed to find a book with isbn:' + isbn
        return this.books[idx];
    }
}

class DigitalLibrary extends Library {
    readonly website: string 

    constructor(website: string){
        super()
        this.website = website
    }

    public listBooks(): string[]{
        return this.books.map(book => book.title);
    }
}

const books = [
      {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    publishedYear: 1960,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949,
    genre: "Dystopian"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Classic"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780316769488",
    publishedYear: 1951,
    genre: "Classic"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    publishedYear: 1813,
    genre: "Romance"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    publishedYear: 1937,
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    isbn: "9780590353427",
    publishedYear: 1997,
    genre: "Fantasy"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "9780544003415",
    publishedYear: 1954,
    genre: "Fantasy"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780061122415",
    publishedYear: 1988,
    genre: "Philosophical Fiction"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    isbn: "9780307474278",
    publishedYear: 2003,
    genre: "Thriller"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isbn: "9780439023481",
    publishedYear: 2008,
    genre: "Dystopian"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    isbn: "9780525478812",
    publishedYear: 2012,
    genre: "Young Adult"
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    isbn: "9780553593716",
    publishedYear: 1996,
    genre: "Fantasy"
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    isbn: "9780307387899",
    publishedYear: 2006,
    genre: "Post-Apocalyptic"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    isbn: "9780307949486",
    publishedYear: 2005,
    genre: "Mystery"
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    isbn: "9780156027328",
    publishedYear: 2001,
    genre: "Adventure"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbn: "9781594631931",
    publishedYear: 2003,
    genre: "Historical Fiction"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    isbn: "9780375842207",
    publishedYear: 2005,
    genre: "Historical Fiction"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "9780060850524",
    publishedYear: 1932,
    genre: "Dystopian"
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    isbn: "9780451526342",
    publishedYear: 1945,
    genre: "Political Satire"
  }
]

const digLib = new DigitalLibrary('lib.com')
books.forEach(book => digLib.addBook(book))
books.forEach(({isbn}) => console.log(digLib.getBookDetails(isbn)))