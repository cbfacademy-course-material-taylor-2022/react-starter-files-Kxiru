
/* Add the Profile function here */
function Profile(props){
    let bio = ''
    let correctName = false;
  
    if (props.name && (props.name.toLowerCase() === 'nkeiru')){
      bio = 'Young Software Engineer!'
      correctName = true;
    }
  
    return <main id="content" role="main" className="base">
      <h1>{correctName ? props.name : "No One"}'s React Page</h1>
        <p>{bio}</p>
      </main>
  }

export default Profile