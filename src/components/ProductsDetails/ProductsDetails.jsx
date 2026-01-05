import { Link, useParams } from "react-router-dom";
import { products as products_list } from "../../data/products.jsx";

function ProductsDetails() {
    
    // fetching the 'id' param from the url
    const { id } = useParams();

    // fetching the product details from products list using the id
    const product = products_list.find((prod) => prod.id == id)

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <>
        Product : {product.title}
        <br />
        Price : ${product.price}
        <br />
        <img src={product.img_src} alt={product.title} width="300px" />
        <br />
        <Link to="/">Back to Home</Link>
        </>
    );

}
export default ProductsDetails;