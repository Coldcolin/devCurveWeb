import './Package.css'

import Img4 from '../../Images/img4.png'
import Img5 from '../../Images/img5.png'
import Card from './Card/Card'
import {Link} from 'react-router-dom'
import icon1 from '../../Images/first.png'
import icon2 from '../../Images/second.png'
import icon3 from '../../Images/third.png'
import icon4 from '../../Images/fourth.png'
import SlideInWhenVisible from "./SlideInWhenVisible"
import SlideInWhenInViewRight from './SlideInWhenInViewRight'

const Package = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
  return (
    <section className='PackageContainer'>

        <div className='PackTop'>
            <div className='PackTopText'>
                What's in for you?
            </div>
            <img className='PackImg2' src={Img4} alt='Avatar' />
        </div>

        <div className='PackCardWrap'>
            <SlideInWhenVisible>
            <Card 
                icon={icon1}
                bg='#ffb703'
                title='Learn from our Experts'
                bd='2px solid #ffb703'
                para='Learn from the Best, Immerse Yourself in Fun and Impactful Learning with Our Expert Instructors. We Handpick Seasoned Professionals to Deliver an Exceptional Learning Experience.'
            />
            </SlideInWhenVisible>
            <SlideInWhenVisible>
            <Card
                icon={icon2} 
                bg='#8ecae6'
                title='Hands on Experience'
                bd='2px solid #8ecae6'
                para='Experience the Power of Doing: Embrace a Hands-on Learning Approach. At Our Academy, We Value Practicality and Empower You to Learn by Doing. Get Ready to Dive In and Unlock Your Full Potential!'
            />
            </SlideInWhenVisible>
            <SlideInWhenInViewRight>
                <Card
                    icon={icon3} 
                    bg='#fb8500'
                    title='Open Door to Opportunities'
                    bd='2px solid #fb8500'
                    para='Open the Door to Opportunities: Secure a Paid Internship Placement Upon Successful Completion of Our Intensive Six-Month Training Program. Your Hard Work and Dedication Will Be Rewarded with a Valuable Real-World Experience and a Stepping Stone towards Your Future Success.'
                />
            </SlideInWhenInViewRight>
            <SlideInWhenInViewRight>
            <Card 
                icon={icon4}
                bg='#219ebc'
                title='Guidance every step of the way'
                bd='2px solid #219ebc'
                para='Benefit from Personalized Mentorship Throughout Your Journey. We Pair You with a Dedicated Mentor who will Provide Expert Guidance and Support, Ensuring You Have the Best Possible Learning Experience and Guidance as You Progress Towards Your Goals.'
            />
            </SlideInWhenInViewRight>
            
            
        </div>

        {/* <div className='PackBtnHold'>
        <a href="https://docs.google.com/forms/d/1cUospbR3bfRMjiz6XYI3QNwoxDVgYG-7kn-gyVUlkh8/" target='blank' className='MobileLink'><button className='PackBtn'>Apply Now!</button></a>
        </div> */}

        <div className='PackImgDown'>
            <img className='PackImg3' src={Img5} alt='Avatar' />
        </div>
        
    </section>
  )
}

export default Package