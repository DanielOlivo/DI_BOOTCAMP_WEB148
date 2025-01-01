export default function Book({book}){

    return (
        <div
            key={book.id}
            className="flex flex-row justify-between min-w-full mb-4" 
        >
            <label
                className="w-5" 
            >{book.id}</label>
            <label
                className="w-1/4" 
            >{book.title}</label>
            <label
                className="w-1/4" 
            >{book.author}</label>
            <label>{book.genre}</label>
        </div>
    )
}