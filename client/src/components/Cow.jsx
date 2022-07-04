import React from 'react';

let Cow = (props) => {
  let cowObj = {
    name: props.cow,
    description: props.description
  }
  return (
    <li onClick={props.click.bind(null, cowObj)}>{props.cow.toUpperCase()}</li>
  )
}

export default Cow;