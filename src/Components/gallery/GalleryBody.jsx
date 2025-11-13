import Image from "./Gallery.js"
import GalleryItem from "./GalleryItem.jsx"

const GalleryBody = () => {
  return (
    <div className="GalleryBody">
        <div className='Hero1'>
            <marquee>Registration for The Curve Africa Academy cohort 7.0 is now open!</marquee>
        </div>
      <h1>Step into Our World</h1>
      <p>
      Explore a collection of captivating photos showcasing the vibrant energy and exciting moments from our past events and activities. Immerse yourself in the visual journey that highlights the engaging experiences and the incredible community that makes our academy thrive. Witness the enthusiasm, collaboration, and passion that define our unique tech ecosystem.
      </p>
      <h2>Event photos from our gallery</h2>
      <section>
        {
          Image.map((e)=>(
            <GalleryItem key={e.id} image={e.image} desc={e.desc} />
          ))
        }
      </section>
      {/* <div to="/gallery" className="EventsSee">See more <FaRegArrowAltCircleRight  /></div> */}
    </div>
  )
}

export default GalleryBody