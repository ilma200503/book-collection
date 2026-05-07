import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import CollectionPage from './pages/CollectionPage'
import BookDetailsPage from './pages/BookDetailsPage'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App

// Route & Routes definierar vilken komponent som ska visas
// /-startssida /search-söksidan osv.
// /book/:id och :id är dynamiska alltså den mastchar samma route men har olika id exempelvis