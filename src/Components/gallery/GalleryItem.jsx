

const GalleryItem = (props) => {
  return (
    <main className="GalleryItem">
        <img src={props.image} />
        <p>{props.desc}</p>
    </main>
  )
}

export default GalleryItem