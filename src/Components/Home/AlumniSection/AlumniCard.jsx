

const AlumniCard = ({name, image, text, stack}) => {
  return (
    <>
        <div className="AlumniCard">
            <div className="AlumniImageandTitle">
            <div className="AlumniImageHolder">
            <img src={image} alt="Alum" className="AlumniImage"/>
            </div>
            <div className="AlumniDescHolder" style={{marginTop: "-20px"}}>
            <h3 className="AlumniCardTitle">{name}</h3>
            <p className="AlumniCardStack" style={{color: "#7D7F7B"}}>{stack}</p>
            </div>
            </div>

            {/* <div className="AlumniLine"></div> */}
            <p className="AlumniCardDesc">
              {text}
            </p>
        </div>
    </>
  )
}

export default AlumniCard