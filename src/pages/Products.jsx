import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

import '../assets/css/products.css';

export const Products = () => {

    const [productList, setProductList] = useState([]);

    const hairAttCollectionRef = collection(db, "hair-attachments");

    const getProductList = async () => {
        try {
            const data = await getDocs(hairAttCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }));
            setProductList(filteredData);
            console.log(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className="products"></div>
    );
};
