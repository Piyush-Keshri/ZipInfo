import './Output.css'
import React from 'react';

const Output = ({ data }) => {
    if (!data) {
        return null;
    }

    return (
        <div>
            <h2>Location Information</h2>
            <p className='country'>Country: {data.country}</p>
            <p>State: {data.places[0].state}</p>
            <p>Place Name: {data.places[0]['place name']}</p>
            <p>Postal Code: {data['post code']}</p>
            <p>Country Abbreviation: {data['country abbreviation']}</p>
            <p>State Abbreviation: {data.places[0]['state abbreviation']}</p>
            <p>Latitude: {data.places[0].latitude}</p>
            <p>Longitude: {data.places[0].longitude}</p>
        </div>
    );
};

export default Output;
