import React from 'react';
import axios from 'axios';
import AddCow from './AddCow.jsx';

const server = 'http://localhost/3000/api/cows';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.post = this.post.bind(this);
  }

  post(cow) {
    axios.post(server, cow)
      .then()
      .catch(err => console.log(err));
  }

  get() {
    axios.get(server)
      .then(()=> {

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <AddCow post={this.post}/>
      </div>
    )
  }
}

export default App;