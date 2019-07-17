import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class CharactersContainer extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(({ data }) => {
        this.setState({ characters: [data.results[0], data.results[1], data.results[2]] })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { characters } = this.state
    return (
      <>
        <h2>Characters</h2>
        {characters.map(character => (
          <div key={character.id}>
            <Link to={`/character/${character.id}`}>
              <button>{character.name}</button>
            </Link>
          </div>
        ))}
      </>
    )
  }
}

export default CharactersContainer
