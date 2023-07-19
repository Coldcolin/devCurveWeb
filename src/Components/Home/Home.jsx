import AlumniSection from "./AlumniSection/AlumniSection"
import Events from "./Events/Events.jsx"
import Hero from "./Hero/Hero"
import Package from "./package/Package"


const Home = () => {
  return (
    <div>
    <Hero/>
    <Package/>
    <AlumniSection/>
    <Events/>
    </div>
  )
}

export default Home