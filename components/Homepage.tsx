import React from 'react';
import styles from '@/styles/Header.module.css';
import Header from '@/components/Header'
import CarouselItem from '@/components/Carousel'
import Products from './Products';


export default function Homepage() {
    return (
        <>
            <Header />
            <CarouselItem />
            <div className={styles.section}>
                <ul className={styles.ul}>
                    <li>
                        <img src="https://react.pixelstrap.com/multikart/assets/images/sub-banner1.jpg"></img>
                        <div className={styles.li}>
                            <h4>SAVE 30%</h4>
                            <h2>MEN</h2>
                        </div>
                    </li>
                    <li>
                        <img src="https://react.pixelstrap.com/multikart/assets/images/sub-banner2.jpg"></img>
                        <div className={styles.li}>
                            <h4>SAVE 30%</h4>
                            <h2>WOMEN</h2>
                        </div>
                    </li>
                </ul>
            </div>
            <Products />
        </>

    );
}
