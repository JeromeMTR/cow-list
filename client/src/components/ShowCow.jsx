import React from 'react';

class ShowCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'baby',
      description: 'baby cow'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.close();
  }


  render() {
    return (
    <div>
    <h2>Cow: {this.props.cow}</h2>

    <div> {this.props.description}</div><button onClick={this.clickHandler}>Close</button>
    </div>
    )
  }
}

export default ShowCow;