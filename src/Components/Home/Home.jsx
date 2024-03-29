import AlumniSection from "./AlumniSection/AlumniSection"
import Events from "./Events/Events.jsx"
import Hero from "./Hero/Hero"
import Sponsors from "./Sponsors/Sponsors"
import Package from "./package/Package"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Package/>
      <Sponsors/>
      <AlumniSection/>
      <Events/>
    </div>
  )
}

export default Home