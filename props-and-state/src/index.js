import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  const headphones =  [{"title":"Headphones 1", "price":1358.99},{"title":"Headphones 2", "price":31.58},{"title":"Headphones 3", "price":58.99},{"title":"Headphones 4", "price":128.99},{"title":"Headphones 5", "price":358.99}];
  const [headphonesList] = useState(headphones);

  return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
