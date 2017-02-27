import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()

    this.state = {
      text: ""
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_BAND",
      payload: this.state.text
    })
    this.setState({
      text: ""
    })
  }

  handleInput(e){
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleInput.bind(this)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
