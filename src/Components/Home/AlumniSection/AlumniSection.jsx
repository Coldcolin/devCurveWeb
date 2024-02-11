import Card from "./AlumniCard"
import Slider from "react-slick";
import "./Alumni.css"
import { testimony } from "./testimony";
import SampleNextArrow from "./SampleNextArrow";

const AlumniSection = () => {
  
  const firstSettings = {
    dots: false,
    infinite: true,
    speed: 2200,
    slidesToShow: 3.25,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        }
      }
    ]
  };


  // const props = useSpring()
  return (
    <>
        <section className='AlumniContainer'>
            <main className="AlumniTitleHolder">
                <h3 className="AlumniHeading">Meet Our Accomplished Alumni</h3>
                <p className="AlumniText">Inspiring Success Stories of Those Who Have Thrived in Our Tech Academy</p>
            </main>
            <article  className="AlumniCards">
            <Slider {...firstSettings} >
              {
                testimony.map((prop)=>(
                  <div key={prop.id} className="CardContainers">
                  <Card name={prop.name} image={prop.image} text={prop.text} stack={prop.stack}/>
                  </div>
                ))
              }
              </Slider>
            </article>
           
        </section>
    </>
  )
}

export default AlumniSection