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
                <p className="AlumniText">Inspiring Success Stories of Those Who Have Thrived in Our Tech Academy<br/><br/>
                Discover the remarkable journeys of our talented alumni who have graduated from our tech academy. From transforming their careers to making significant contributions in the tech industry, our alumni embody the spirit of excellence and innovation. Get inspired by their stories of perseverance, growth, and achievement, and see how our academy has empowered them to reach new heights in their professional lives. Join us in celebrating the success of our alumni, and envision the endless possibilities that await you on your own path to greatness.</p>
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