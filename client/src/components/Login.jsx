import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login({ setUser, user}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://field-trip-server.onrender.com/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      setUser(result);
      setUsername("");
      setPassword("");
    } catch (error) {
    };

  };

  return (
    <>
      <br/>
      <div className="loginPage">

        {user.user_id ? <> <h1 className="loginMessage"> Welcome back, {`${user.first_name}`}!</h1>
        
          <div className="loginPageButtons">
          <button onClick={() => {
            navigate(`/account`);
          }}>Go to Account</button>

          <button onClick={() => {
            navigate(`/places`);
          }}>Explore Locations</button> 

          </div>
          
          </>
          :       
          <form className="loginForm"onSubmit={handleSubmit}>
            <h2 className="loginHeading">Log In</h2>
            <span>Already have an account? Log in below.</span> <br/> <br/>
            <label>
              Username:<input value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
              Password:<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button className="submitButton"
            >Submit</button>
          </form>}
        </div>
    </>

  );
};