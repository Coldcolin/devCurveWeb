import {useState} from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import Logo1 from '../Images/curve1.png'
import Logo2 from '../Images/curve2.png'
import {BiMenu} from 'react-icons/bi'
// import {ImCancelCircle} from 'react-icons/im'
import Cancel from "../Icons/Cancel"
import Menu from './Menu'



function Header() {
  //State to Change Header Color When Scrolling
  const [color, setColor] = useState(false)
  const [seeMobile, setSeeMobile] = useState(false)

  // Function to Change Header Color When Scrolling
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  const onClicked=()=>{
    setSeeMobile(!seeMobile)
  }

  window.addEventListener('scroll', changeColor)


  return (
    <>
        <section className={color ? 'HeaderContainer HeaderContainer-bg' : seeMobile? 'HeaderContainer HeaderContainer-white': 'HeaderContainer'}>
            <div className='HeaderWrapper'>
                  <div className='HeaderLogo'>
                    {color ? (<img src={Logo1} alt='Logo' className='Logs'/>): seeMobile? (<img src={Logo1} alt='Logo' className='Logs'/>):(<img src={Logo1} alt='Logo' className='Logs'/>) }
                  </div>
                  
                <div className='Buttons'>
                    <div className='HeaderNavs'>
                      <NavLink to="/" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>Home</NavLink>
                      <NavLink to="about" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>About</NavLink>
                      <NavLink to="contact" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>Contact</NavLink>
                      <NavLink to="gallery" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>Gallery</NavLink>
                    </div>
                    <a href="https://docs.google.com/forms/d/https://docs.google.com/forms/d/1Bzjt1KihWusX7aaTemlvWjJMe2ptzKM5c7q5aw_pa4k/closedform-7kn-gyVUlkh8/" target='blank' className="aTag"><button className='HeaderBtn2'>Register for Free!</button></a>
                </div>
            </div>
            <div className={'HeaderBurger'}>
                { seeMobile? <Cancel onClicked={onClicked}/>: <BiMenu color="white" fontSize={30} onClick={()=> setSeeMobile(!seeMobile)}/> }
            </div>
        </section>
        {
          seeMobile? <section className="mobileMenu">
          <Menu seeMobile={seeMobile} setSeeMobile={setSeeMobile}/>
          <div className="transparent" onClick={()=> setSeeMobile(!seeMobile)}>
            
          </div>
        </section>: null
        }
        
    </>
  )
}

export default Header