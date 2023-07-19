import Card from "./AlumniCard"
import Slider from "react-slick";
import "./Alumni.css"
import { testimony } from "./testimony";

const AlumniSection = () => {
  
  const firstSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      }
    ]
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // const props = useSpring()
  return (
    <>
        <section className='AlumniContainer'>
            <main className="AlumniTitleHolder">
                <h3 className="AlumniHeading">Meet Our Alumni</h3>
                <p className="AlumniText">We ensure to provide you with the best instructor to make your learning fun and impactful, we have hand selected out instructors that will deliver the best learning experience.</p>
            </main>
            <article  className="AlumniCards">
            <Slider {...firstSettings} >
              {
                testimony.map((prop)=>(
                  <div key={prop.id} className="CardContainers">
                  <Card name={prop.name} image={prop.image} text={prop.text}/>
                  </div>
                ))
              }
              </Slider>
            </article>
            <article className="AlumniCardHolders">
              <Slider {...settings} >
              {
                testimony.map((prop)=>(
                  <div key={prop.id} className="CardContainer">
                  <Card name={prop.name} image={prop.image} text={prop.text}/>
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