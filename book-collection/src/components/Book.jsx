import { Link } from 'react-router-dom'

function Book({ book, addToCollection }) {
  const bookId = book.key.replace('/works/', '')

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <p>{book.first_publish_year}</p>
      <Link to={`/book/${bookId}`}>Visa detaljer</Link>
      {addToCollection && (
        <button onClick={() => addToCollection(book)}>+ Lägg till i samling</button>
      )}
    </div>
  )
}

export default Book

// Denna kod visar all info om en bok (titel,författare osv.)
// book.key från vårt api har oftast "/works/12345", för att få ett rent id tar vi bort "works"
// link som det förklaras redan i koden skapar en länk som man klickar på för att komma fram till detaljsidan av en bok
// addToCollection && används för att book komponenten kan användas både på söksidan och samlingssidan men man vill bara ha den på söksidan, basically knappen visas bara om addToCollection skickats in som en prop