import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({user, setUser}) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://field-trip-server.onrender.com/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, username, password })
      });
      const result = await response.json();
      setUsername("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setUser(result)
    } catch (error) {
    }

  }

  return (
<>
    <div className="signUp">
        { user.user_id?
        <div className="registrationPageButtons">
          <h2 className="registrationSuccessful">Thank you for registering, {`${user.first_name}`}!</h2>
          <button onClick={() => {
            navigate(`/places`)
          }}>Explore Locations</button>

        </div>
        :

      <form className="registrationForm" onSubmit={handleSubmit}>
        <h2 className="registerHeading">Register</h2>
        <span> Registering will allow you to save a list of your favorite places and submit your own favorite Chicago locations to our directory.</span> <br/> <br/>
        <label>
          First Name:<input value={firstName} onChange={(event) => setFirstname(event.target.value)} /> <br/>
        </label>
        <label>
          Last Name:<input value={lastName} onChange={(event) => setLastname(event.target.value)} /><br/>
        </label>
        <label>
          Username:<input value={username} onChange={(event) => setUsername(event.target.value)} /> <br/>
        </label>
        <label>
          Password:<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> <br/> <br/>
        </label>
        <button className="submitButton">Submit</button> 
       
      </form> }

    </div>
    </>
  );
};