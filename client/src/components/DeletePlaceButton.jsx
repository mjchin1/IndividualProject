import { useDeletePlaceMutation } from '../api/placesAPI';
import { useNavigate } from 'react-router-dom';

export default function DeletePlaceButton({id}) {
  
  const [deletePlace] = useDeletePlaceMutation();
  const navigate = useNavigate()

  function handleClick() {
    deletePlace(id)
    alert("You have deleted this location.")
};

return (
  <div className="deletePlaceButton">
    <button onClick={() => {
      handleClick()
      navigate(`/places`)
      }}>
      Delete Location
    </button>
  </div>
);
};