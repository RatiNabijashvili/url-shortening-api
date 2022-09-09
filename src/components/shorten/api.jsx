import { render } from '@testing-library/react'
import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    fetch('https://api-ssl.bitly.com/v4/shorten', { method: 'POST' })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
}

export default App
