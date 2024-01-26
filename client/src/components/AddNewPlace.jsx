import { useState } from 'react';
import { useAddPlaceMutation } from '../api/placesAPI';
import { useNavigate } from 'react-router-dom';

export default function addNewPlace() {
  const navigate = useNavigate();
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [locationType, setLocationType] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [website, setWebsite] = useState("");
  const [addPlace] = useAddPlaceMutation();

  function handleSubmit(event) {
    event.preventDefault();
    const body = (JSON.stringify({
      placeName,
      address,
      hours,
      imgUrl,
      description,
      locationType,
      neighborhood,
      website,
    }));
    addPlace(body);
    setPlaceName("");
    setAddress("");
    setHours("");
    setImgUrl("");
    setDescription("");
    setLocationType("");
    setNeighborhood("");
    setWebsite("");

};

return (
 <>
 <div>
    <br/>
    <form className="submitPlaceForm"onSubmit={handleSubmit}>
    <h2 className="loginHeading">Submit Your Favorite Chicago Location</h2>
    <div className="submitPrompt">
    <span>Do you have a cool place that you think more people should know about?</span>  <br/>
    <span>Submit it to our directory here!</span>
    </div>
    <br/> 
      <label>
        Place Name: <input value={placeName} onChange={(event) => setPlaceName(event.target.value)} />
      </label> <br/>
      <label>
        Address:<input value={address} onChange={(event) => setAddress(event.target.value)} />
      </label><br/>
      <label>
        Hours:<input value={hours} onChange={(event) => setHours(event.target.value)} />
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
        Neighborhood: <input value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)} />
      </label><br/>
      <label>
        Website: <input value={website} onChange={(event) => setWebsite(event.target.value)} />
      </label><br/> <br/>
  
      <button className="submitButton" onClick={() => {
        alert("Thank you for your submission!")
      }}
       >Submit</button>
       <br/>
      <button className="backButton" onClick={() => {
            navigate(`/places`)
          }} >Back to All Locations</button>

    </form>
    
  </div>
  </>

)
};

  














