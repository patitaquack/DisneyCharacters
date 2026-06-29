import { useState } from 'react'
import './App.css'

function App() {
  const [character, setCharacter] = useState(null)
  const [banList, setBanList] = useState([])

  async function discoverCharacter() {
    let foundValidCharacter = false

    while (!foundValidCharacter) {
      const randomId = Math.floor(Math.random() * 7438) + 1

      const response = await fetch(`https://api.disneyapi.dev/character/${randomId}`)

      // Convert API response into a JavaScript object
      const result = await response.json()

      // result.data stores character info
      const data = result.data

      // Grab the first film, TV show, and ally
      // If none exist, display fallback text
      const film = data.films?.[0] || 'No film listed'
      const tvShow = data.tvShows?.[0] || 'No TV show listed'
      const ally = data.allies?.[0] || 'No ally listed'

      // Choose the best attribute to ban
      let banAttribute = ''
      let banLabel = ''

      if (data.films?.length > 0) {
      banAttribute = data.films[0]
      banLabel = 'Film'
      }
      else if (data.tvShows?.length > 0) {
      banAttribute = data.tvShows[0]
      banLabel = 'TV Show'
      }
      else if (data.videoGames?.length > 0) {
      banAttribute = data.videoGames[0]
      banLabel = 'Video Game'
      }
      else if (data.allies?.length > 0) {
      banAttribute = data.allies[0]
      banLabel = 'Ally'
      }



       // Only display characters that have an image & does not have a banned film
       if (
        data.imageUrl &&
        !banList.includes(banAttribute)
      ) {


        setCharacter({
          name: data.name,
          image: data.imageUrl,
          films: film,
          tvShows: tvShow,
          allies: ally,
        
          // Stores whichever attribute is clickable
          banAttribute: banAttribute,
          banLabel: banLabel,
        })

        foundValidCharacter = true
      }
    }
  }

  // Adds a film to the ban list if it isn't already there
  function addToBanList(value) {
    if (!banList.includes(value)) {
      setBanList([...banList, value])
    }
  }


  // Removes a film from the ban list
  function removeFromBanList(value) {
    setBanList(banList.filter(item => item !== value))
  }

  return (
    <div className="app">
      <main className="main-card">
        <h1>Disney Discover!</h1>
        <p>Discover magical Disney characters!</p>
        <p>✨🏰🐭🌟</p>

        {character && (
          <>
            <h2>{character.name}</h2>
            <div className="attribute-row">

{/* Film is clickable */}
<button
  onClick={() => addToBanList(character.banAttribute)}
>
  {character.banLabel}: {character.banAttribute}
</button>

{/* These are just displayed, not clickable */}
<p>TV Show: {character.tvShows}</p>

<p>Ally: {character.allies}</p>

</div>

            <div className="image-section">
              <img
                className="character-img"
                src={character.image}
                alt={character.name}
              />
            </div>
          </>
        )}

        <button className="discover-btn" onClick={discoverCharacter}>
          ✨ Discover!
        </button>
      </main>
      <aside className="ban-panel">
      <h2 className="ban-title">Ban List</h2>
        <p>Select an attribute to ban it</p>

        {banList.map(item => (
          <button
            className="ban-button"
            key={item}
            onClick={() => removeFromBanList(item)}
          >
            {item}
          </button>
        ))}
      </aside>
    </div>
  )
}

export default App