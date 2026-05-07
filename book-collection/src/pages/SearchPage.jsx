import { useState } from 'react'
import { searchBooks } from '../api/booksApi'
import BookList from '../components/BookList'

function SearchPage({ addToCollection }) {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setError(null)
    try {
      const results = await searchBooks(query)
      setBooks(results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Sök böcker</h1>
      <input
        type="text"
        placeholder="Sök efter en bok..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Sök</button>

      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}
      {books.length > 0 && <BookList books={books} addToCollection={addToCollection} />}
    </div>
  )
}

export default SearchPage

// query håller koll/minns vad användaren skriver i sökfältet
// books håller koll/minns sökresultaten
//handleSearch körs när man klickar påå sök alltså den anropar api 