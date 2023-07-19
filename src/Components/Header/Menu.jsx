import { NavLink } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

const Menu =({setSeeMobile, seeMobile})=>{
    const [color, setColor] = useState(false)
    const props = useSpring({
        from: { y: 0 },
        // delay: 100,
        to: [
            { y: 50},
            { y: 0},
          ]
      })

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
        <animated.div style={props} className={ color? "Menu MenuOpacity": "Menu"}>
            <div className="mobileNavs">
                <NavLink to="/" className="mobileNavItems" onClick={()=> setSeeMobile(!seeMobile)}>Home</NavLink>
                <NavLink to="about" className="mobileNavItems" onClick={()=> setSeeMobile(!seeMobile)}>About</NavLink>
                <NavLink to="contact" className="mobileNavItems" onClick={()=> setSeeMobile(!seeMobile)}>Contact</NavLink>
                <NavLink to="gallery" className="mobileNavItems" onClick={()=> setSeeMobile(!seeMobile)}>Gallery</NavLink>
                <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank'><button className='mobileButton' onClick={()=> setSeeMobile(!seeMobile)}>Register for Free!</button></a>
            </div>
        </animated.div>
    )
}

export default Menu