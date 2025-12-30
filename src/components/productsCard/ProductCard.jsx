import './ProductCard.css';


const ProductCard = ({product}) => {
    return (
        <div className="card product_card">
                    <img src={product.img_src} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p>
                                Rs.{product.price}
                            </p>
                            <button className='btn btn-primary'>
                                Add to Cart
                            </button>
                        </div>
                </div>
    )
};

export default ProductCard;