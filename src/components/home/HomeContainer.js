import React, { Component } from 'react'
import axios from 'axios'

class HomeContainer extends Component {
  state = {
    quote: ''
  }

  componentDidMount() {
    axios
      .get('https://api.kanye.rest')
      .then(({ data: { quote } }) => {
        this.setState({ quote })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { quote } = this.state
    return (
      <>
        <h1>{quote}</h1>
      </>
    )
  }
}

export default HomeContainer
