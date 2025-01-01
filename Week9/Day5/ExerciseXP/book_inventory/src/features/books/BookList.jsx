import { useSelector } from "react-redux"
import { selectAllBooks, selectSelectedGenre } from "./bookSlice"
import Book from './Book.jsx'

export default function BookList(){
    const allBooks = useSelector(selectAllBooks)
    const genre = useSelector(selectSelectedGenre)

    return (
        <div
            className='flex flex-col items-center justify-start w-4/5 h-4/5 overflow-y' 
        >
            {allBooks
            .filter(book => (genre === 'all') || (genre === book.genre))
            .map(book => <Book book={book} />
            )}
        </div>
    )
}