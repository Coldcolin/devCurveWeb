import Phone from "../Icons/Phone"
import Gmail from "../Icons/Gmail"
import Location from "../Icons/Location"
import Web from "../Icons/Web"
import Facebook from "../Icons/Facebook"
import LinkedIn from "../Icons/LinkedIn"
import Instagram from "../Icons/Instagram"
import Twitter from "../Icons/Twitter"

const GetInTouch = () => {
  return (
    <main className="GetInTouch">
        <h2>Get In touch</h2>
        <section className="GetInTouchInfo">
            <form>
                <h4>Reach out to me Via message</h4>
                <label>Name</label>
                <input/>
                <label>Contact email</label>
                <input/>
                <label>Message</label>
                <textarea/>
                <button>Send Now</button>
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