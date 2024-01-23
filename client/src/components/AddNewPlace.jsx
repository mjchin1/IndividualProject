import { useState } from 'react';
import { useAddPlaceMutation } from '../api/placesAPI';

export default function addNewPlace() {
  const [placeName, setPlaceName] = useState("")
  const [address, setAddress] = useState("")
  const [hours, setHours] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [description, setDescription] = useState("")
  const [locationType, setLocationType] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [addPlace] = useAddPlaceMutation();
 

  function handleSubmit(event) {
    event.preventDefault();
    addPlace(JSON.stringify({
      placeName,
      address,
      hours,
      imgUrl,
      description,
      locationType,
      neighborhood,
    }));
};

return (
  <div>
    <h2 className="loginHeading">Submit a Beautiful Place</h2>
    
    <form className="loginForm"onSubmit={handleSubmit}>
      <label>
        Place Name <input value={placeName} onChange={(event) => setPlaceName(event.target.value)} />
      </label> <br/>
      <label>
        Address<input value={address} onChange={(event) => setAddress(event.target.value)} />
      </label><br/>
      <label>
        Hours <input value={hours} onChange={(event) => setHours(event.target.value)} />
      </label><br/>
      <label>
        Img Url:<input value={imgUrl} onChange={(event) => setImgUrl(event.target.value)} />
      </label><br/>
      <label>
        Description: <input value={description} onChange={(event) => setDescription(event.target.value)} />
      </label><br/>
      <label>
        Location Type: <input value={locationType} onChange={(event) => setLocationType(event.target.value)} />
      </label><br/>
      <label>
        Neighborhood <input value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)} />
      </label><br/>
  
      <button className="submitButton"
       >Submit</button>

    </form>
  </div>

)
};

  














