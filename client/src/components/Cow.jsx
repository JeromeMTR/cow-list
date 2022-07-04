import React from 'react';

let Cow = (props) => {

  return (
    <li>{props.cow.toUpperCase()}</li>
  )
}

export default Cow;