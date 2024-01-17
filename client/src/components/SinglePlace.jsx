import React from 'react';
import { useFetchSinglePlaceQuery } from '../api/placesAPI.js';
import { useNavigate, useParams } from 'react-router-dom';

export default function SinglePlace() {
  const { id } = useParams();
  const { data = {}, error, isLoading } = useFetchSinglePlaceQuery(id);
  const navigate = useNavigate();

  console.log(useFetchSinglePlaceQuery(id))
 
  if (isLoading) {
    return <div> Loading...</div>;
  }
  if (error) {
    return <div> Error</div>
  }
  console.log(data)
  return (
    <div className="place">
      <div key={data.place_id} className="book-card">
        <div className="place-image-container">
          <img className="place-image" src={data.img_url} />
        </div>
        <div className="place-details">
          <span className="placeName">  {data.place_name} </span> <br />
          <span> {data.description} </span> <br></br> <br></br>
          <div className="singlePlacePageButtons">
          <button onClick={() => {
            navigate(`/places`)
          }} >Back to All Places</button>
          </div>
        </div>
        <br/><br/>
      </div>
    </div>
  );
};




