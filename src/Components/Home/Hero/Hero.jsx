import './Hero.css'
import Img1 from '../../Images/img1.png'
import Img2 from '../../Images/Img2.png'


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
                            Become an Expert in Software Engineering for 
                            <div className='free'>FREE</div>
                        </div>
                        <p className='HeroPara'>
                            Join The Curve Academy today, learn and acquire hands on experience,
                            build amazing portfolio and you might have the opportunity for an internship on completion,
                            all for free!
                        </p>
                        <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank'><button className='HeroBtn'>Apply Now!</button></a>
                    </div>

                    <img  className='HeroRight' src={Img1} alt='Avatar'/>
                    <img  className='HeroRight2' src={Img2} alt='Avatar'/>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero