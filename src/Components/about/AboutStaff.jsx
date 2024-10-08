import Sam from "../../assets/sam.svg"
import Cynthia from "../../assets/Cynthia.svg"
// import Ubani from "../../assets/Ubani.svg"
import Colin from "../../assets/Me.png"
import Joshua from "../../assets/Joshua.svg"
import Ebuka from "../../assets/ebuka.jpg"
import Obinna from "../../assets/Obinna.png"
import Franklin from "../../assets/Ellipse 22.svg"
import Ahmed from "../../assets/Ahmed.jpg"
import desola from "../../assets/modesola.jpg"
// import samule

const staff =[
  {
    id: 1,
    des:"Team Lead",
    name: "Samuel K. Ujunwa",
    image: Sam
  },
  {
    id: 2,
    des:"Operations  & Design Lead",
    name: "Cynthia C. Onyilimba",
    image: Cynthia
  },
  {
    id: 3,
    des:"Co-founder",
    name: "Franklin Anozie",
    image: Franklin
  },
  {
    id: 4,
    des:"Front-end Instructor",
    name: "Colin Decorce",
    image: Colin
  },
  {
    id: 5,
    des:"Back-end Instructor",
    name: "Aninku Joshua",
    image: Joshua
  },
  {
    id: 6,
    des:"Front-end Instructor",
    name: "Ebuba Nweje",
    image: Ebuka
  },
  {
    id: 7,
    des:"Product design Instructor",
    name: "Obinna Nwachukwu",
    image: Obinna
  },
  {
    id: 8,
    des:"Back-end Instructor",
    name: "Ahmed Isiaka",
    image: Ahmed
  },
  {
    id: 9,
    des:"Social Media Manager",
    name: "Modesolaoluwa G Asemudara",
    image: desola
  },
]

const Staff =(prop)=>{
  return(
    <section className="StaffSection">
            <article>
                <img src={prop.image}/>
                <h3>{prop.name}</h3>
                <p>{prop.des}</p>
            </article>
      </section>
  )
}

const AboutStaff = () => {
  return (
    <main className="AboutStaff">
        <h2>Meet The Team</h2>
        <div>
        {
          staff.map((e)=>(
            <Staff key={e.id} image={e.image} des={e.des} name={e.name} />
          ))
        }
        </div>
    </main>
  )
}

export default AboutStaff