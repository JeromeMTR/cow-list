import React from 'react';
import axios from 'axios';
import AddCow from './AddCow.jsx';
import CowList from './CowList.jsx';

const server = 'http://localhost/3000/api/cows';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: ['boy', 'girl', 'cow']
      currentCow: ''
    };
    this.post = this.post.bind(this);
  }

  post(cow) {
    axios.post(server, cow)
      .then()
      .catch(err => console.log(err));
  }

  get() {
    axios.get(server)
      .then((response)=> {
        this.setState({cows: response.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <AddCow post={this.post}/>
        <CowList cowList={this.state.cows}/>
      </div>
    )
  }
}

export default App;