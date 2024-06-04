export const ProductItem = ({ product }) => {

    return (
        <div className="product-item">
            <img src="" alt="" />
            <h1>{product.name}</h1>
            <p>Brand: {product.brand}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
};
