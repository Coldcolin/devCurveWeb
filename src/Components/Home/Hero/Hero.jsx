import './Hero.css'
// import Img1 from '../../Images/img1.png'
import Img2 from '../../Images/HeroImage.png'
import Swal from 'sweetalert2'
import Img3 from '../../Images/img3.png'

function Hero() {
    
    const showAlert =()=>{
        Swal.fire({
            title: "Application Closed",
            text: "Please watch out for the next Cohort application",
            icon: "warning",
            buttonsStyling: false,
            customClass: {
              confirmButton: 'confirm-button-class',
              cancelButton: 'cancel-button-class'
            }
          });
    }

    
  return (
    <>
        <section className='HeroContainer'>
            <div className='Hero1'>
            <marquee>Registration for The Curve Africa Academy cohort 7.0 is now open!</marquee>
            </div>
            <div className='Bottom'>
                <div className='BottomWrap'>
                    <div className='HeroLeft'>
                        <div className='HeroText'>
                        Unlock Your Software Engineering Skill for 
                        <img  className='HeroRight' src={Img2} alt='Avatar'/>
                            <span className='free'> Free</span>
                        </div>
                        <p className='HeroPara'>
                        Elevate Your Skills, Join The Curve Africa Academy for a Comprehensive Learning Experience, Hands-on Training, a Stellar Portfolio, and Potential Internship Opportunities – All at No Cost!
                        </p>
                        <div className="HeroButtonHolder">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfyTyACRRNnTU3BxNS6jitKodWCPAJ38Lto7y0-Q9utCl9u-g/viewform?usp=send_form" target='blank' className="HeroTag">
                        <button className='HeroBtn2'>Register For Free!</button>
                        </a>
                        {/* <a href="https://forms.gle/inbwx6ji5TrdTeuf9" target='_blank' rel='noopener noreferrer' className="HeroTag">
                        <button className='HeroBtn2'>Register For Free!</button>
                        </a> */}
                        <div className='HeroImg'>
                    <img src={Img3} alt='Avatar' />
                </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Hero