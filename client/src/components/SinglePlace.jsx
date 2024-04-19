import React from 'react';
import { useFetchSinglePlaceQuery } from '../api/placesAPI.js';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'
import DeletePlaceButton from './DeletePlaceButton'


export default function SinglePlace({userId}) {
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

    <>
    <br/>
    <div className="singlePlaceContainer">
      
      <div key={data.place_id} className="singlePlaceCard">

      <p className="singlePlaceName">  {data.place_name} </p>
      
      <div className=" breakLine singlePlaceBreakLine"></div>
      
        <div className="single-place-image-container">
          <img className="singlePlaceImage" src={data.img_url} />
        </div>

        <div className="singlePlaceDetails">
          <span>  {data.address} </span> <br/> 
          <span> Hours: {data.hours} </span> <br/>
          <a className="webLink" target="_blank" href={data.website}> Visit Website </a> <br/> <br/>
        </div>
     
        <div className="placeDescription"> {data.description} </div> <br/>
       
        {!userId? <> <p className="loginPrompt">Please log in to add this place to your list of favorites.</p> <br/> <br/></> :null}
       
        <div className="singlePlacePageButtons">
          <button className="backButton" onClick={() => {
            navigate(`/places`)
          }} >Back to All Locations</button>
          {userId? <FavoriteButton className="favoriteButton" userId = {userId} placeId = {data.place_id}/> :null}
          {userId && data.place_id > 21? <DeletePlaceButton className="delete-button" id = {id} /> :null} 
        </div>

        </div>
        
        <br/><br/>
      
    </div>

    </>
  );
};




