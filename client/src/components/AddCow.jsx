import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, inputBar) {
    let obj = {};
    obj[inputBar] = e.target.value;
    this.setState(obj, ()=> {
      console.log(this.state);
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.post(this.state);
  }

  render() {
    return (
      <div>
      <h1> Add A Cow To The Butcher Farm</h1>
      <form onSubmit={e => this.onSubmit(e)}>
        <input type='text' onChange={e => this.onChange(e, 'name')}></input>
        <input type='text' onChange={e => this.onChange(e, 'description')}></input>
        <input type='submit' value='ADD COW'></input>
      </form>
      </div>
    )
  }
}

export default AddCow;