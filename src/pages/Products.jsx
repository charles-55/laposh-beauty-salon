import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

import '../assets/css/products.css';
import { ProductItem } from './ProductItem';

export const Products = () => {
    const [productList, setProductList] = useState([]);
    const productsCollectionRef = collection(db, "wigs");

    const getProductList = async () => {
        // try {
        //     const data = await getDocs(productsCollectionRef);
        //     const filteredData = data.docs.map((doc) => ({
        //         ...doc.data(), id: doc.id
        //     }));
        //     setProductList(filteredData);
        //     console.log(filteredData);
        // } catch (err) {
        //     console.error(err);
        // }
          
        fetch("http://localhost:8080/api/store/all")
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        setProductList([
            {
                id: 1,
                name: "Brazillian Wig",
                brand: "Cors",
                category: "wigs",
                price: "$100",
                description: "A Brazillian wig"
            },
            {
                id: 2,
                name: "Cambodian Wig",
                brand: "Cors",
                category: "wigs",
                price: "$100",
                description: "A Cambodian wig"
            }
        ]);
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className="products">
            <div className="product-items-container">
                {productList.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
