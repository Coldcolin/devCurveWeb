import './Package.css'
import Img3 from '../../Images/img3.png'
import Img4 from '../../Images/img4.png'
import Img5 from '../../Images/img5.png'
import Card from './Card/Card'
import {Link} from 'react-router-dom'
import icon1 from '../../Images/first.png'
import icon2 from '../../Images/second.png'
import icon3 from '../../Images/third.png'
import icon4 from '../../Images/fourth.png'
// import Fa from '../../Images/fa.png'
// import Tw from '../../Images/tw.png'
// import Li from '../../Images/li.png'
// import In from '../../Images/in.png'
// import Modal from '@mui/material/Modal';
// import CancelIcon from '@mui/icons-material/Cancel';
// import Box from '@mui/material/Box';

const Package = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
  return (
    <section className='PackageContainer'>

        <div className='PackImg'>
            <img className='PackImg1' src={Img3} alt='Avatar' />
        </div>

        <div className='PackTop'>
            <div className='PackTopText'>
                What's in for you?
            </div>
            <img className='PackImg2' src={Img4} alt='Avatar' />
        </div>

        <div className='PackCardWrap'>
            <Card 
                icon={icon1}
                bg='#ffb703'
                title='Learn from our Experts'
                bd='2px solid #ffb703'
                para='We ensure to provide you with the best instructor to make your learning fun and impactful, we have hand selected out instructors that will deliver the best learning experience'
            />
            <Card
                icon={icon2} 
                bg='#8ecae6'
                title='Hands on Experience'
                bd='2px solid #8ecae6'
                para='We believe in practical, and that is why we invest on it, you would learn better by doing it yourself, get ready!'
            />
            <Card
                icon={icon3} 
                bg='#fb8500'
                title='Internship on Completion'
                bd='2px solid #fb8500'
                para='Depending on your performance after completion of the training, you might have the opportunity to intern with The Curve'
            />
            <Card 
                icon={icon4}
                bg='#219ebc'
                title='Mentorship'
                bd='2px solid #219ebc'
                para='You will be assigned to a mentor who will guide you through your journey in Tech'
            />
        </div>

        <div className='PackBtnHold'>
        <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank' className='MobileLink'><button className='PackBtn'>Apply Now!</button></a>
        </div>

        <div className='PackImgDown'>
            <img className='PackImg3' src={Img5} alt='Avatar' />
        </div>
        
    </section>
  )
}

export default Package