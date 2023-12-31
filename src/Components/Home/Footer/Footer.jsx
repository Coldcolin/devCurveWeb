import React from 'react'
import './Footer.css'
import Img7 from '../../Images/img7.png'
import Fa from '../../Images/fa.png'
import Tw from '../../Images/tw.png'
import Li from '../../Images/li.png'
import In from '../../Images/in.png'
import Logo from '../../Images/curve2.png'
import Gmail from '../../Images/gmail.png'
import Phone from '../../Images/phone.png'

function Footer() {

    let date = new Date().getFullYear();

  return (
    <>
        <section className='FooterContainer'>
            <div className='FooterContent'>
            <div className='FooterLogo'><img src={Logo} alt='Logo' className='Logs'/></div>
                <div className='LeftContent'>
                    <h4>Get in touch</h4>
                    <p className='GmailHold'><img src={Phone} alt='gmail' />+2348137253138</p>
                    <p className='GmailHold'><img src={Phone} alt='gmail' />+2348186793482</p>
                    <div className='GmailHold'><img src={Gmail} alt='gmail' /> thecurveafrica@gmail.com</div>
                    <img className='Img7' src={Img7} alt='avatar' />
                </div>
                <div className='MiddleContent'>
                    <h4>Social Media</h4>
                    <div className='SocialLinks'>
                        <a href='https://fb.me/thecurveafrica' target='blank'><img src={Fa} alt='fa' className='Social'/></a>
                        <a href='https://twitter.com/thecurveafrica' target='blank'><img src={Tw} alt='tw' className='Social'/></a>
                        <a href='https://www.linkedin.com/company/the-curve-africa/' target='blank'><img src={Li} alt='li' className='Social'/></a>
                        <a href='https://instagram.com/thecurveafrica?igshid=YmMyMTA2M2Y=' target='blank'><img src={In} alt='in' className='Social'/></a>
                    </div>
                    @thecurve.academy
                </div>
                <div className='FooterBtnContain'>
                <a href="https://docs.google.com/forms/d/1cUospbR3bfRMjiz6XYI3QNwoxDVgYG-7kn-gyVUlkh8/" target='blank'><button className='FooterBtn'>Apply Now!</button></a>
                </div>
            </div>
            <div className='FooterLine'></div>
            <div className='FooterBottom'> ©{date} The Curve Africa | All rights reserved</div>
        </section>

    </>
  )
}

export default Footer