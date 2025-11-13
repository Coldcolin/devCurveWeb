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
                Umuze House, 12A, Oshodi, By Coconut B/Stop, Tincan Island, Apapa, Lagos, Lagos, Lagos
            </span>

            <div className='LocationMap'>
            {/* <iframe 
            // src="https://maps.google.com/maps?q=163,%20Muyibi%20street,%20Olodi-Apapa,%20Lagos&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
            src="https://www.google.com/maps/place/Saidon+Oil+and+Transport/@6.4410313,3.3317863,19z/data=!4m6!3m5!1s0x103b8978ebaaf3bb:0x75261df5350ef320!8m2!3d6.44103!4d3.33243!16s%2Fg%2F1q5bmbw6_?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D"
            style={{width: "100%", height:"100%"}}></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.1584851429731!2d3.3317863!3d6.4410313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8978ebaaf3bb%3A0x75261df5350ef320!2sSaidon%20Oil%20and%20Transport!5e0!3m2!1sen!2sng!4v1763040755659!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            style={{width: "100%", height:"100%"}}
            ></iframe>
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