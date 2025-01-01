import Filter from './features/books/Filter'
import BookList from './features/books/BookList.jsx'
import { useSelector } from 'react-redux'
import { selectAllBooks, selectSelectedGenre } from './features/books/bookSlice'

function App() {

  const allBooks = useSelector(selectAllBooks)
  const genre = useSelector(selectSelectedGenre)

  return (
    <div
      className='flex flex-col items-center min-w-96' 
    >
      <Filter />
      <BookList />
    </div>
  )
}

export default App
