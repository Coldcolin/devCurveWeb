import Phone from "../Icons/Phone"
import Gmail from "../Icons/Gmail"
import Location from "../Icons/Location"
import Web from "../Icons/Web"
import Facebook from "../Icons/Facebook"
import LinkedIn from "../Icons/LinkedIn"
import Instagram from "../Icons/Instagram"
import Twitter from "../Icons/Twitter"
import { useRef } from "react"
import { useState } from "react"
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setDone(true)
        emailjs.sendForm('service_7qp8uil', 'template_hre6l8h', formRef.current, 'e_9mk8PU9uPmeE13U')
      .then((result) => {
          console.log(result.text);
          alert("mail sent successfully")
          setDone(false)
      }, (error) => {
          console.log(error.text);
          setDone(false)
      });
    }
  return (
    <main className="GetInTouch">
        <h2>Get In touch</h2>
        <section className="GetInTouchInfo">
            <form ref={formRef} onSubmit={handleSubmit}>
                <h4>Reach out to me Via message</h4>
                <label>Name</label>
                <input name="from_name" />
                <label>Contact email</label>
                <input name="user_email"/>
                <label>Message</label>
                <textarea name="message"/>
                <button disabled={done} className={done? "buttonDisabled": ""}>Send Now</button>
            </form>
            <article className="GetInTouchLinks">
                <div className="GetInTouchLink"><Phone/> +2348186793482, +2348137253138</div>
                <div className="GetInTouchLink"><Gmail/> thecurveafrica@gmail.com</div>
                <div className="GetInTouchLink"><Location/> 161, Muyibi street, Olodi-Apapa, Lagos</div>
                <div className="GetInTouchLink"><Web/> www.the-curve.africa</div>
                <div className="GetInTouchSocial">
                    <h4>@thecurveafrica</h4>
                    <div>
                        <div><Facebook/></div>
                        <div><LinkedIn/></div>
                        <div><Instagram/></div>
                        <div><Twitter/></div>
                    </div>
                </div>
            </article>
        </section>
    </main>
  )
}

export default GetInTouch