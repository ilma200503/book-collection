import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import CollectionPage from './pages/CollectionPage'
import BookDetailsPage from './pages/BookDetailsPage'

function App() {
  const [collection, setCollection] = useState(() => {
    const saved = localStorage.getItem('bookCollection')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('bookCollection', JSON.stringify(collection))
  }, [collection])

  const addToCollection = (book) => {
    const alreadyAdded = collection.some((b) => b.key === book.key)
    if (alreadyAdded) return alert('Boken finns redan i din samling!')
    setCollection([...collection, { ...book, note: '' }])
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage addToCollection={addToCollection} />} />
        <Route path="/collection" element={<CollectionPage collection={collection} setCollection={setCollection} />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
// Route & Routes definierar vilken komponent som ska visas
// /-startssida /search-söksidan osv.
// collection blir då en lista med användarens sparade böcker som då lagras i state 
// addToCollection beskriver vad den gör i namnet, den lägger alltså till en bok i ens kollektion MEN först kollar den om boken redan finns i ens kollektion 
// Vad som händer är att addToCollection skickas som prop till SearchPage, och collection samt setCollection till CollectionPage 
// useState (() => {...}) gör så att när man startar webbsidan/appen kollar/letar den först efter om det finns sparad data sen innan i localStorage 
// useEffect gör så att en ny ändring sparas automatiskt till localStorage
//JSON.stringify omvandlar listan till test för att kunna lagra och JSON.parse omvandlar tillbaka 