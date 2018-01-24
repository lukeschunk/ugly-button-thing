import React, { Component } from 'react'

class Button extends Component {
  constructor () {
    super();
    
    this.state = {
      colorVariable: 'blue'
    }
  }
  
  onButtonClick = () => {
    if (this.state.colorVariable === 'blue') {
      this.setState({ colorVariable: 'green'})
    } else {
      this.setState({ colorVariable: 'blue'})
    }
  }
  
  render () {
    const { text, subText } = this.props;

    return (
      <button onClick={this.onButtonClick} className="our-button">
        <div style={{border: '2px solid ' + this.state.colorVariable, padding: '5px'}}>
          {text}
        </div>
        <div className="subText">{subText}</div>
      </button>
    )
  }
}

export default Button;
