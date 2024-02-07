import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { EventsPhotos } from "./Events";
import "./Events.css"

const Events = () => {
    
  return (
    <div className="EventsHolder">
        <h2 className="EventsHeader">Our Gallery</h2>
        <div className="EventsContent">
            {/* <Slider {...settings} > */}
            {
                EventsPhotos.map((prop)=>(
                  <div key={prop.id} className="Event">
                  <img src={prop.image} alt="event Image" />
                  </div>
                ))
              }
            {/* </Slider> */}
        </div>
        <Link to="/gallery" className="EventsSee">See more <FaRegArrowAltCircleRight /></Link>
    </div>
  )
}

export default Events