import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>📚 Book Collection</h1>
      <p>Välkommen till din personliga boksamling!</p>
      <p>Här kan du söka efter böcker, spara dina favoriter och skriva egna anteckningar.</p>

      <div>
        <h2>Kom igång</h2>
        <Link to="/search">
          <button>🔍 Sök böcker</button>
        </Link>
        <Link to="/collection">
          <button>📖 Min samling</button>
        </Link>
      </div>

      <div>
        <h2>Vad kan du göra?</h2>
        <ul>
          <li>🔍 Sök bland miljontals böcker via Open Library</li>
          <li>➕ Spara böcker till din personliga samling</li>
          <li>✏️ Skriv egna anteckningar om böcker</li>
          <li>🗑️ Ta bort böcker från samlingen</li>
        </ul>
      </div>
    </div>
  )
}

export default Home

//Första sidan fixad för att se lite mer organiserad ut och lättare att läsa för ögonen