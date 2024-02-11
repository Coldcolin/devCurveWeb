import React from 'react'
import "./Contact.css"
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Location = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  return (
    <div className='LocationContainer'>
        <div className='LocationWrapper'> 
            <h2>Our Location</h2>
            <span>
                Our hubs are located in Lagos Nigeria <br />
                163, Muyibi street, Olodi-Apapa, Lagos | Carat24, 24 road, Festac town, Lagos
            </span>

            <div className='LocationMap'>
            <iframe src="https://maps.google.com/maps?q=163,%20Muyibi%20street,%20Olodi-Apapa,%20Lagos&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{width: "100%", height:"100%"}}></iframe>
            {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact> */}
            </div>
        </div>
    </div>
  )
}

export default Location