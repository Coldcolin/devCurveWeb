import React from 'react'
import './Sponsors.css'
import Quidax from '../../Images/quidax.png'
// import Korapay from '../../Images/korapay.png'
import Korapay from '../../Images/logo-kora.svg'
import Fincra from '../../Images/fincra.png'
import Some from "../../Images/picture 2.png"
import Trust from "../../Images/Trusted by.png"
import irukka from "../../../assets/irruka.jpg"
import afiari from "../../../assets/afiari.png"


function Sponsors() {
  return (
    <section className='SponsorsHolder'>
      <section className='SponsorsContainer'>
        <div className='SponsorsLogo'>
              <img src={Trust} alt='trust' className='Logos1'/>
              {/* <a href='https://korapay.com/' target='blank' ><img src={Korapay} alt='kora' className='Logos'/></a> */}
              <img src={Korapay} alt='kora' className='Logos'/>
              <img src={Fincra} alt='quidax' className='Logos'/>
                {/* <img src={Quidax} alt='quidax' className='Logos'/> */}
                <img src={Some} alt='quidax' className='Logos'/>
                <img src={irukka} alt='quidax' className='Logos irukka'/>
                <img src={afiari} alt='quidax' className='Logos'/>
        </div>
      </section>
    </section>
  )
}

export default Sponsors