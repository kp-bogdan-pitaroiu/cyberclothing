import React from 'react';
import styles from '@/styles/Header.module.css';
import Header from '@/components/Header'
import { Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel'


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
        </>

    );
}

function CarouselItem() {
    var items = [
        {
            name: "Welcome To Fashion",
            image: "https://react.pixelstrap.com/assets/images/home-banner/2.jpg",
            description: "WOMEN FASHION"
        },
        {
            name: "Welcome To Fashion",
            image: "https://react.pixelstrap.com/assets/images/home-banner/1.jpg",
            description: "MEN FASHION"
        },
        {
            name: "Welcome To Fashion",
            image: "https://react.pixelstrap.com/assets/images/home-banner/2.jpg",
            description: "WOMEN FASHION"
        },
        {
            name: "Welcome To Fashion",
            image: "https://react.pixelstrap.com/assets/images/home-banner/1.jpg",
            description: "MEN FASHION"
        },
    ]

    return (


        <Carousel
            className={styles.carousel}
            autoPlay={false}
            duration={500}
            animation={'slide'}
            swipe={false}
            indicators={false}
            index={1}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >

    )
}

function Item(props: any) {
    return (
        <Paper>
            <img className={styles.bckg} src={props.item.image}></img>
            <div className={styles.description}>
                <h2>{props.item.name}</h2>
                <h1>{props.item.description}</h1>
                <Button variant='contained' size='large' className={styles.btnSN}>SHOP NOW</Button>
            </div>

        </Paper >
    )
}