import {useState} from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import Logo1 from '../Images/curve1.png'
import Logo2 from '../Images/curve2.png'
import {BiMenu} from 'react-icons/bi'
import {ImCancelCircle} from 'react-icons/im'
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

  window.addEventListener('scroll', changeColor)


  return (
    <>
        <section className={color ? 'HeaderContainer HeaderContainer-bg' : seeMobile? 'HeaderContainer HeaderContainer-white': 'HeaderContainer'}>
            <div className='HeaderWrapper'>
                  <div className='HeaderLogo'>
                    {color ? (<img src={Logo1} alt='Logo' className='Logs'/>): seeMobile? (<img src={Logo1} alt='Logo' className='Logs'/>):(<img src={Logo2} alt='Logo' className='Logs'/>) }
                  </div>
                  
                <div className='Buttons'>
                    {/* <a href='https://join.slack.com/t/thecurveafrica/shared_invite/zt-1etfl6ukx-IXKNy9N26lMQj7YT3OZGLw' target='blank' style={{textDecoration:'none', color:'inherit'}}><button className='HeaderBtn1'>Join our community</button></a> */}
                    <div className='HeaderNavs'>
                      <NavLink to="/" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>Home</NavLink>
                      <NavLink to="about" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>About</NavLink>
                      <NavLink to="contact" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>Contact</NavLink>
                      <NavLink to="gallery" className={color ? 'HeaderNavItems HeaderNavsChange' : seeMobile? 'HeaderNavItems HeaderNavsChange': 'HeaderNavItems'}>Gallery</NavLink>
                    </div>
                    <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank'><button className='HeaderBtn2'>Register for Free!</button></a>
                </div>
            </div>
            <div className={seeMobile? "HeaderBurger1":'HeaderBurger'}>
                { seeMobile? <ImCancelCircle color="#023047" fontSize={30} onClick={()=> setSeeMobile(!seeMobile)}/>: <BiMenu color="white" fontSize={30} onClick={()=> setSeeMobile(!seeMobile)}/> }
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