import Carousel from "../../components/Carousel/Carousel";
import './HomePage.css';
import { products } from "../../data/products";
import { carousel_images } from "../../data/carousel_images";

import ProductCard from "../../components/productsCard/productCard";

function HomePage() {
    return (
        <div className="container h-100">
            <div className="row home_banner ">
                <div className="col d-flex flex-column h-100">
                    <Carousel images={carousel_images} />
                </div>
                <div className="col bg-success h-100"></div>
            </div>

            {/* <div className="container row">
                <ol>
                {
                    products_list.map((product, index)=>(
                        <li>{product.title} - Rs.{product.price}</li>
                    ))
                }
                </ol>
            </div> */}

            <div className="card-group my-2 ">

                {products.map((product, index) => (
                    <ProductCard product={product} key={product.id} />
                ))

                }

            </div>
        </div>
    );
}

export default HomePage;
