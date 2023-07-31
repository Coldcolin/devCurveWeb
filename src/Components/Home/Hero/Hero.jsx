import './Hero.css'
import Img1 from '../../Images/img1.png'
import Img2 from '../../Images/Img2.png'
import Img3 from '../../../assets/HomeHero.png'


function Hero() {
    

    
  return (
    <>
        <section className='HeroContainer'>
            <div className='Hero1'>
                Registration for The Curve cohort 2.0 is now open!
            </div>
            <div className='Bottom'>
                <div className='BottomWrap'>
                    <div className='HeroLeft'>
                        <div className='HeroText'>
                            Unlock Your Software Engineering Expertise for 
                            <span className='free'> Free</span>
                        </div>
                        <p className='HeroPara'>
                        Elevate Your Skills, Join The Curve Africa Academy for a Comprehensive Learning Experience, Hands-on Training, a Stellar Portfolio, and Potential Internship Opportunities – All at No Cost!
                        </p>
                        <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank'><button className='HeroBtn'>Apply Now!</button></a>
                    </div>

                    <img  className='HeroRight' src={Img3} alt='Avatar'/>
                    <img  className='HeroRight2' src={Img2} alt='Avatar'/>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero