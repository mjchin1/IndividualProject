import React from 'react';
import { useFetchPlacesQuery } from '../api/placesAPI.js';
import { useNavigate, Link } from 'react-router-dom';



const Places = () => {
  const { data = [], error, isLoading } = useFetchPlacesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div> Loading...</div>;

  }

  if (error) {

    return <div> Error </div>;

  }

  return (

    <>
    <div className="breakLine"></div>
    <div className="placeContainer">
        
      <div className="places">
        <h1 className="placesHeading"> Let's explore. </h1> <br/> <br/>
        <div className="appDescription">
        <p>The Field Trip is a directory that is dedicated to helping you find Chicago's most beautiful and unique spaces. Whether you're new to Chicago or just looking to venture outside of your neighborhood, we hope to introduce you to new places that will help you find inspiration while reminding you how special this city is.</p>

        <p>Browse our directory below, or<Link to = '/register'>create an account</Link>to save a list of your favorite places and add your own favorite Chicago locations to the directory. </p>
        </div> <br/> <br/>
        
        {data.map((place) => (
          <div key={place.place_id} className="place-card">
            <div className="place-image-container">
                <img className="place-image" src={place.img_url} /> <br/>
            </div> 
            <div className="place-details">
              <span className="placeName">  {place.place_name} </span> <br />
        
              <button onClick={() => {
                navigate(`/places/${place.place_id}`)
              }} >More Info </button>
            </div>
          </div>

        ))}

      </div>

    </div>

    </>
  );
};



export default Places;
