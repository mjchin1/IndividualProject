import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/users/register', {
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
    } catch (error) {
      setError(error.message);
    }

  }

  return (

    <div className="signUp">
      <h2 className="registerHeading">Register</h2>
      <div className="errorMessage">
        {error && <p>{error}</p>}
      </div>

      <form className="registrationForm" onSubmit={handleSubmit}>

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
       
      </form>

      {
        <div className="registrationPageButtons">
          {/* <button onClick={() => {
            navigate(`/account`)
          }}>Go to Account</button> */}
          <button onClick={() => {
            navigate(`/places`)
          }}>Search for Books</button>
        </div>
        }
    </div>
  );
};