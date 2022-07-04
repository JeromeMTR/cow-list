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
      <form onSubmit={e => this.onSubmit(e)}>
        <input type='text' onChange={e => this.onChange(e, 'name')}></input>
        <input type='text' onChange={e => this.onChange(e, 'description')}></input>
        <input type='submit' value='ADD COW'></input>
      </form>
    )
  }
}

export default AddCow;