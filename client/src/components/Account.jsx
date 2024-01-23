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
      <h2 className="accountHeading">My Account Information:</h2>
      <div className="accountDetails">
        <span>Name: {data.first_name} {data.last_name}</span><br />
        <span>Username: {data.username}</span><br/> <br/> <br/>
        {<h3> {`${user.first_name}`}'s Favorite Places</h3>}

        {favorites?.map((favoritePlace) => (
          <div key={favoritePlace.place_id} className="book-card">
            <div className="place-image-container">
              <img className="place-image" src={favoritePlace.img_url} />
            </div>
            <div className="place-details">
              <span className="placeName">  {favoritePlace.place_name} </span> <br />
             
              <br />
            </div>
          </div>
        ))}
        {/* <span>Books Checked Out:</span>
        <ul>
          {data.books?.map((book) => <li key={book.id}> {book.title} </li>)}
        </ul> */}

      </div>
      <div className="accountPageButtons">
        <button onClick={() => {
          navigate(`/places`)
        }} >Back to Homepage</button>
        <button onClick={() => {
          navigate(`/users/${user.user_id}/favorites`)
        }} >Manage Favorites</button>
      </div>
    </div>

  );
};