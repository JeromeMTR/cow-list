import React from 'react';
import Cow from './Cow.jsx'

let CowList = (props) => {
  console.log(props.cowList);
  let cows = props.cowList.map((cow, i) =>
      <Cow cow={cow} key={i}/>
    )

  return (
    <div>{cows}</div>
  )
}

export default CowList;