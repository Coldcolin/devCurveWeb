import Slider from "react-slick";
import { EventsPhotos } from "./Events";
import "./Events.css"

const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3.5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2.2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2.2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1.5,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="EventsHolder">
        <h2 className="EventsHeader">Event Photos</h2>
        <div className="EventsContent">
            <Slider {...settings} >
            {
                EventsPhotos.map((prop)=>(
                  <div key={prop.id} className="Event">
                  <img src={prop.image} alt="event Image" />
                  </div>
                ))
              }
            </Slider>
        </div>
    </div>
  )
}

export default Events