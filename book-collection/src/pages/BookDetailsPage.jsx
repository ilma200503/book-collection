import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getBookById } from '../api/booksApi'

function BookDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id)
        setBook(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  if (loading) return <p>Laddar...</p>
  if (error) return <p>{error}</p>
  if (!book) return <p>Boken hittades inte.</p>

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Tillbaka</button>
      <h1>{book.title}</h1>
      <p><strong>Beskrivning:</strong> {book.description?.value || book.description || 'Ingen beskrivning tillgänglig'}</p>
      <p><strong>Första utgåva:</strong> {book.first_publish_date || 'Okänt'}</p>
    </div>
  )
}

export default BookDetailsPage

// use Params hämtar id:et från URL, ex. "/book/1234" så hämtas bara 1234 och det blir id:et
// use Navigate tillåter användningen av tillbaka knappen så att man går bakåt
// useEffect körs automatiskt vilket sker bara när sidan laddas och sen hämtar den bokens detaljer
// [id] i slutet av useEffect betyder basically "kör detta om id:et ändras"