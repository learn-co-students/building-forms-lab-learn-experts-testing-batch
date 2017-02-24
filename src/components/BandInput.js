import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.store.dispatch({type: "ADD_BAND", payload: this.state.text})
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  render(){
    const {store} = this.props;
    return (<form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" value={this.state} onChange={(e) => this.handleChange(e)} />
      </form>
    )
  }
}

export default BandInput;
