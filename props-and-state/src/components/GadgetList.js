import React from 'react';

const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div>
        <div style={{fontWeight:'bold'}}>{item.title}</div><br></br>
        <div>{item.price}</div>
        <hr></hr>
      </div>
      ))}
    </main>
  );
}

export default GadgetList;
