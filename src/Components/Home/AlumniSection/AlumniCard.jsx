

const AlumniCard = ({name, image, text}) => {
  return (
    <>
        <div className="AlumniCard">
            <div className="AlumniImageHolder">
            <img src={image} alt="Alum" className="AlumniImage"/>
            </div>
            <h3 className="AlumniCardTitle">{name}</h3>

            {/* <div className="AlumniLine"></div> */}
            <p className="AlumniCardDesc">
              {text}
            </p>
        </div>
    </>
  )
}

export default AlumniCard