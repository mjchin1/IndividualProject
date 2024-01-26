

export default function RemoveButton({ favoritePlace,favorites, setFavorites }) {

  async function handleClick() {
    try {
      const response = await fetch(`/api/favorite-places/${favoritePlace.favorite_place_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setFavorites(favorites.filter((favorite) => favorite.favorite_place_id !== result.favorite_place_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <button onClick={() => {
        handleClick();
      }}>Remove from Favorites</button>
    </div>
  );
};