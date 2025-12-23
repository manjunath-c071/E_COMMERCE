import'./Carousel.css';
const Carousel = ({ images }) => {
  return (
    <>
      <div id="carouselExample" className="carousel slide custom_carousel h-100">

        <div className="carousel-inner h-100">
          {
            images.map((img_object, index) => (
  <div className ={ index === 0 ? "carousel-item active" : "carousel-item"}>
    <img src={img_object.img_src} className="d-block w-100 h-100 object-fit cover"  alt="..."/> 
    </div>)
            )
}
</div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </>
      )
  }

      export default Carousel;