import './Hero.css'
import Img1 from '../../Images/img1.png'
import Img2 from '../../Images/Img2.png'
// import Img3 from '../../../assets/HomeHero.png'
import Img3 from '../../Images/img3.png'

function Hero() {
    

    
  return (
    <>
        <section className='HeroContainer'>
            <div className='Hero1'>
            <marquee>Registration for the The Curve Africa Academy cohort 4.0 is now open!</marquee>
            </div>
            <div className='Bottom'>
                <div className='BottomWrap'>
                    <div className='HeroLeft'>
                        <div className='HeroText'>
                        Unlock Your Software Engineering Skill for 
                            <span className='free'> Free</span>
                        </div>
                        <div className='HeroTextMobile'>
                        Unlock Your <br/> Software Engineering <br/>Skill for Free
                        </div>
                        <p className='HeroPara'>
                        Elevate Your Skills, Join The Curve Africa Academy for a Comprehensive Learning Experience, Hands-on Training, a Stellar Portfolio, and Potential Internship Opportunities – All at No Cost!
                        </p>
                        <a href="https://docs.google.com/forms/d/https://docs.google.com/forms/d/1Bzjt1KihWusX7aaTemlvWjJMe2ptzKM5c7q5aw_pa4k/closedform-7kn-gyVUlkh8/" target='blank'><button className='HeroBtn2'>Register For Free!</button></a>
                    </div>

                    <img  className='HeroRight' src={Img2} alt='Avatar'/>
                    <img  className='HeroRight2' src={Img2} alt='Avatar'/>
                    
                </div>
                <div className='HeroImg'>
                    <img src={Img3} alt='Avatar' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero