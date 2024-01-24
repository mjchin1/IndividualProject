import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Account({ user, favorites }) {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`/api/users/${user.user_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
      }
    }
    getUser();
  }, []);

  return (

    <div className="userInfo">
      <h2 className="welcomeMessage">Welcome Back, {`${user.first_name}`}!</h2>
      <div className="breakLine"></div>
      <h2 className="accountHeading">Account Information:</h2>
      <div className="accountDetails">
        <span>Name: {data.first_name} {data.last_name}</span><br />
        <span>Username: {data.username}</span><br/> <br/>
        <div className="breakLine"></div>

      </div>
      <br/>
      <div className="accountPageButtons">
        <button onClick={() => {
          navigate(`/places`)
        }} >Back to All Places</button>
        <button onClick={() => {
          navigate(`/users/${user.user_id}/favorites`)
        }} >My Favorites</button>
      </div>
    </div>

  );
};