import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookForm from '../components/BookForm'

function CollectionPage({ collection, setCollection }) {
  const [editingBook, setEditingBook] = useState(null)

  const handleDelete = (bookKey) => {
    setCollection(collection.filter((b) => b.key !== bookKey))
  }

  const handleUpdate = (updatedBook) => {
    setCollection(collection.map((b) => b.key === updatedBook.key ? updatedBook : b))
    setEditingBook(null)
  }

  if (collection.length === 0) return <p>Din samling är tom — sök efter böcker och lägg till!</p>

  return (
    <div>
      <h1>Min samling📖</h1>
      {collection.map((book) => (
        <div key={book.key}>
          <Link to={`/book/${book.key.replace('/works/', '')}`}>
            <h3>{book.title}</h3>
          </Link>
          <p>{book.author_name?.join(', ')}</p>
          <p><strong>Anteckning:</strong> {book.note || 'Ingen anteckning'}</p>

          <button onClick={() => setEditingBook(book)}>✏️ Redigera</button>
          <button onClick={() => handleDelete(book.key)}>🗑️ Ta bort</button>

          {editingBook?.key === book.key && (
            <BookForm
              book={editingBook}
              onSave={handleUpdate}
              onCancel={() => setEditingBook(null)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default CollectionPage

// editingBook håller koll på vilken bok som redigeras
//handleDelete filtrerar bort boken som har matchande key från samlingen
//handleUpdate ersätter den gammla boken med den uppdaterade/nya boken
//BookForm visas bara under boken som håller på o redigeras, medan ediitingBook?.key === book.key typ kollar på det som händer