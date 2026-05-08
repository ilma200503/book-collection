import { useState } from 'react'

function BookForm({ book, onSave, onCancel }) {
  const [note, setNote] = useState(book.note || '')

  const handleSubmit = () => {
    if (!note.trim()) return alert('Anteckningen får inte vara tom!')
    onSave({ ...book, note })
  }

  return (
    <div>
      <h3>Redigera anteckning</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Skriv din anteckning här..."
        rows={3}
      />
      <button onClick={handleSubmit}>💾 Spara</button>
      <button onClick={onCancel}>Avbryt</button>
    </div>
  )
}

export default BookForm

//note är ett mer kontrollerat fält basically react håller koll på vad sonm skrivs
//handleSubmit ser till att anteckningen inte är tom och sen anropar onSave med den uppdaterade boken
// onCancel stänger forumuläret utan att spara 