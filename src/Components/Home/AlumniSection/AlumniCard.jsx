

const AlumniCard = ({name, image, text}) => {
  return (
    <>
        <div className="AlumniCard">
            <img src={image} alt="Alum" className="AlumniImage"/>
            <h3 className="AlumniCardTitle">{name}</h3>
            <p className="AlumniCardDesc">
              {text}
            </p>
        </div>
    </>
  )
}

export default AlumniCard