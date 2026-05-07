import Book from './Book'

function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.key} book={book} />
      ))}
    </div>
  )
}

export default BookList

// denna kod gör så att den tar emot "books" som en lista basically, loopar igenom varje bok och "tar upp" en book komponent