import React from 'react';
import axios from 'axios';
import AddCow from './AddCow.jsx';
import CowList from './CowList.jsx';
import ShowCow from './ShowCow.jsx';

const server = 'http://localhost/3000/api/cows';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [
        {name: 'baby', description: 'to do nothing'},
        {name: 'grandpa', description: 'old cow'},
      ],
      currentCow: '',
      currentDescription: '',
      showCow: false
    };
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
    this.onClick = this.onClick.bind(this);
    this.close = this.close.bind(this);
  }

  post(cow) {
    axios.post(server, cow)
      .then(this.get())
      .catch(err => console.log(err));
  }

  get() {
    return axios.get(server)
      .then((response)=> {
        this.setState({cows: response.data})
      })
      .catch(err => console.log(err));
  }
  close() {
    this.setState({
      showCow: false
    })
  }

  onClick(cow) {
    this.setState({
      currentCow: cow.name,
      currentDescription: cow.description,
      showCow: true
    }, ()=> {
      console.log('after', this.state);
      console.log('this is cow obj', cow);
    })
  }

  componentDidMount() {
    this.get();
  }

  render() {
    let showCow;
    if (this.state.showCow) {
      showCow = (<ShowCow
        cow={this.state.currentCow}
        description={this.state.currentDescription}
        close={this.close}/>)
    }
    return (
      <div>
        <AddCow post={this.post}/>
        {showCow}
        <CowList
        cowList={this.state.cows}
        click={this.onClick}/>
      </div>
    )
  }
}

export default App;