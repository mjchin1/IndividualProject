import { useDeletePlaceMutation } from '../api/placesAPI';
import { useNavigate } from 'react-router-dom';

export default function DeletePlaceButton({id}) {
  
  const [deletePlace] = useDeletePlaceMutation();
  const navigate = useNavigate()

  function handleClick() {
    deletePlace(id)
    alert("You have deleted this place.")
};

return (
  <div className="deletePlaceButton">
    <button onClick={() => {
      handleClick()
      navigate(`/places`)
      }}>
      Delete Place
    </button>
  </div>
);
};