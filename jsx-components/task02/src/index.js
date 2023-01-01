import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';

function Greeting(props){
  return(
    <div>
      <h4>Hello, {props.name}!</h4>
      <h5>Here's a little bit about you!</h5>
      <p>{props.bio}</p>
    </div> 
  )
}

function App() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [name, setName] = React.useState('Test');
  const [bio, setBio] = React.useState('Test Bio');


  const handleChange = (event) => {
    if(event.target.name=="name"){
      setName(event.target.value);
    } else {
      setBio(event.target.value);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  }

  return (
      <div>
        {/* Replace the string below with the JSX Profile component */}
        {/* <Profile name="Nkeiru"/> Task 2 */}

        <form>
          <label>Your Name: </label>
          <input type="text" name="name" onChange={handleChange}/><br></br>

          <label>Biography: </label>
          <input type="text" name="bio" onChange={handleChange}/><br></br>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>

        <br></br>
        {formSubmitted && <Greeting name={name} bio={bio}/>}
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

