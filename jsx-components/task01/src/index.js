import React from 'react';
import ReactDOM from 'react-dom/client';


const name = 'Nkeirux';

function Profile(name){
  let bio = ''
  let correctName = false;

  if (name.toLowerCase() === 'nkeiru'){
    bio = 'Young Software Engineer!'
    correctName = true;
  }

  return <main id="content" role="main" className="base">
    <h1>{correctName ? name : "No One"}'s React Page</h1>
      <p>{bio}</p>
    </main>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));
