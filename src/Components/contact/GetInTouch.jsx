// import Phone from "../Icons/Phone"
// import Gmail from "../Icons/Gmail"
// import Location from "../Icons/Location"
// import Web from "../Icons/Web"
// import Facebook from "../Icons/Facebook"
// import LinkedIn from "../Icons/LinkedIn"
// import Instagram from "../Icons/Instagram"
// import Twitter from "../Icons/Twitter"
import { useRef } from "react"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { FaInstagram, FaTwitter, FaFacebookF   } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const GetInTouch = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setDone(true)
        emailjs.sendForm('service_ukpfz2d', 'template_hre6l8h', formRef.current, 'e_9mk8PU9uPmeE13U')
      .then((result) => {
          console.log(result.text);
          alert("mail sent successfully")
          setDone(false)
      }, (error) => {
          console.log(error.text);
          alert("something went wrong")
          setDone(false)
      });
    }
  return (
    <main className="GetInTouch">
        <h2>Get In touch</h2>
        <section className="GetInTouchInfo">
            <form ref={formRef} onSubmit={handleSubmit}>
                <h4>Reach out to us via message</h4>
               <article>
                <div className="InputData">
                    <label>Name</label>
                    <input name="from_name"  className="InputDataInput" required={true}/>
                </div>
                <div className="InputData">
                    <label>Contact email</label>
                    <input name="user_email" type="email" className="InputDataInput" required={true}/>
                </div>
               </article>
                <div className="Textarea">
                <label>Message</label>
                <textarea name="message" required={true}/>
                </div>
                <button type="submit" disabled={done} className={done? "buttonDisabled": ""}>Send Now</button>
            </form>
            <article className="GetInTouchLinks">
                {/* <div className="GetInTouchLink"><Phone/> +2348186793482, +2348137253138</div> */}
                <div className="GetInTouchLink"><MdEmail/> <b>Email Address:</b> thecurveafrica@gmail.com</div>
                {/* <div className="GetInTouchLink"><Location/> 161, Muyibi street, Olodi-Apapa, Lagos</div> */}
                {/* <div className="GetInTouchLink"><Web/> www.the-curve.africa</div> */}
                <div className="GetInTouchSocial">
                    <span><b>Social address:</b> @thecurveafrica</span>
                    <div>
                        <div><FaTwitter/></div>
                        <div><FaInstagram/></div>
                        <div><FaFacebookF /></div>
                        <div><FaLinkedinIn/></div>
                    </div>
                </div>
            </article>
        </section>
    </main>
  )
}

export default GetInTouch