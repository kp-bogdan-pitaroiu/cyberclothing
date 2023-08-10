import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Products.module.css';

type Product = {
    id: number;
    photo: string;
    name: string;
    price: number;
    status: string;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div id='products'>
            <div className={styles.products}>
                <h4>Exclusive Products</h4>
                <h2>SPECIAL PRODUCTS</h2>
            </div>
            <div className={styles.ul}>
                {products.map((product) => (

                    product.status !== 'deleted' && (
                        <Link href={`/frontend/products/${product.id}`} key={product.id}>
                            <ul className={styles.li}>
                                <li>
                                    <img src={product.photo} alt={product.name} />
                                </li>
                                <li>
                                    <h6>{product.name}</h6>
                                </li>
                                <li>
                                    <h4>${product.price}</h4>
                                </li>
                            </ul>
                        </Link>
                    )
                ))}
            </div>
        </div>
    );
};

export default Products;
