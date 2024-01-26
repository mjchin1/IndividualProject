import { useEffect } from "react";
import { useNavigate }  from 'react-router-dom';
import RemoveButton from './RemoveButton';

export default function Favorites({ user, favorites, setFavorites }) {
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await fetch(`/api/users/${user.user_id}/favorites`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setFavorites(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavorites();
  }, []);

  if(!favorites.length) {
    return (
    <>
      <p className ="noFavoritesMessage">You do not currently have any favorite places saved.</p>
      <div className="favoritesPageButton">
        <button onClick={() => {
          navigate(`/places`);
        }}>Explore Locations</button> 
      </div>
    </>)
  }
  return (
    <>
    <br/>
    <div className="favoritesContainer">
      <h1 className="favoritesHeading">{`${user.first_name}`}'s Favorite Places</h1>
      <>
        {favorites.map((favoritePlace) => (
          <>
          <div key={favoritePlace.place_id} className="favorite-card">
            <div className="place-image-container">
              <img className="place-image" src={favoritePlace.img_url} />
            </div>
            <div className="place-details">
              <span className="favoritePlaceName">  {favoritePlace.place_name} </span> <br />

              <RemoveButton
                favorites={favorites}
                favoritePlace={favoritePlace}
                setFavorites={setFavorites}
              />
              <br />
            </div>
          </div>
          <div className="longBreakLine"></div>
        
          <br/>
          </>
        ))}

      </>
    </div>

    </>
  );
};