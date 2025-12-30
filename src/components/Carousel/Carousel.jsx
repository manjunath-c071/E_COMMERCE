import './Carousel.css';


const Carousel = ({ images }) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide custom_carousel h-100" data-bs-ride="carousel">
            <div className="carousel-indicators h-100">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100">

                { images.map((img_object, index ) => ( 
                    <div data-bs-interval="2000" key = {index} className={ index === 0 ? "carousel-item active" : "carousel-item"} >
                        <img src={img_object.img_src} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                    </div>)
                    ) 
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

export default Carousel;