
import './Footer.css'
import Img7 from '../../Images/img7.png'
// import { RiTwitterXLine } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import Logo from '../../Images/curve1.png'
import { ImFacebook2 } from "react-icons/im";
import { LuMail } from "react-icons/lu";
import { Link } from 'react-router-dom'

function Footer() {

    let date = new Date().getFullYear();

  return (
    <>
        <section className='FooterContainer'>
            <div className='FooterContent'>
            <div className='FooterLogo'><img src={Logo} alt='Logo' className='Logs'/></div>
                <div className='LeftContent'>
                    <h4>Get in touch</h4>
                    <div className='GmailHold'><LuMail />thecurveafrica@gmail.com</div>
                    <img className='Img7' src={Img7} alt='avatar' />
                    <div style={{display: "flex", gap:"10px"}}>
                    
                    <div className='SocialLinks'>
                    <h4>Social Media</h4>
                        <div className="LinksHolder">
                        <a href='https://fb.me/thecurveafrica' target='blank'><ImFacebook2 /></a>
                        <a href='https://twitter.com/thecurveafrica' target='blank'><BsTwitter /></a>
                        <a href='https://www.linkedin.com/company/the-curve-africa/' target='blank'><GrLinkedin /></a>
                        <a href='https://instagram.com/thecurveafrica?igshid=YmMyMTA2M2Y=' target='blank'><GrInstagram /></a>
                        <p>@thecurveafrica</p>
                        </div>
                    </div>
                    
                    </div>
                </div>
                <div className='MiddleContent'>
                    {/* <Link to="/">Home</Link> */}
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact us</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className='FooterBtnContain'>
                <a href="https://docs.google.com/forms/d/https://docs.google.com/forms/d/1Bzjt1KihWusX7aaTemlvWjJMe2ptzKM5c7q5aw_pa4k/closedform-7kn-gyVUlkh8/" target='blank'><button className='FooterBtn'>Apply Now!</button></a>
                </div>
            </div>
            <div className='FooterLine'></div>
            <div className='FooterBottom'> ©{date} The Curve Africa | All rights reserved</div>
        </section>

    </>
  )
}

export default Footer