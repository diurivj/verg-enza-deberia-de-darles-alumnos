import React, { Component } from 'react'
import axios from 'axios'

class CharacterDetail extends Component {
  state = {
    character: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        this.setState({ character: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { character } = this.state
    return (
      <>
        <h2>Character</h2>
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} />
        <br />
        <button onClick={() => this.props.history.goBack()}>Go back</button>
      </>
    )
  }
}

export default CharacterDetail
