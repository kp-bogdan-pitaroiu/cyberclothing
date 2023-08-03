import React from 'react'
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import logo from '@/components/img/img.jpg';
import { ListItem } from '@mui/material';
import { Facebook, Google, Twitter, Instagram, RssFeed, FmdGood, Call, Email, Fax } from '@mui/icons-material'

const Footer = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.ul}>
                    <ul className={styles.desc}>
                        <li><Image className={styles.logo} src={logo} alt="logo" /></li>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p></li>
                        <li>
                            <ul className={styles.links}>
                                <li><Facebook fontSize='large' className={styles.clr} /></li>
                                <li><Google fontSize='large' className={styles.clr} /></li>
                                <li><Twitter fontSize='large' className={styles.clr} /></li>
                                <li><Instagram fontSize='large' className={styles.clr} /></li>
                                <li><RssFeed fontSize='large' className={styles.clr} /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={styles.rlist}>
                    <ul className={styles.li}>
                        <li><h3>MY ACCOUNT</h3></li>
                        <li><p>Womens</p></li>
                        <li><p>Clothing</p></li>
                        <li><p>Accessories</p></li>
                        <li><p>Featured</p></li>
                    </ul>
                    <ul className={styles.li}>
                        <li><h3>WHY WE CHOOSE</h3></li>
                        <li><p>Shipping & Return</p></li>
                        <li><p>Secure Shopping</p></li>
                        <li><p>Gallery</p></li>
                        <li><p>Affiliates</p></li>
                        <li><p>Contacts</p></li>
                    </ul>
                    <ul className={styles.lip}>
                        <li><h3>STORE INFORMATION</h3></li>
                        <ListItem><FmdGood className={styles.clr1} /><p>Multikart Demo Store Romania</p></ListItem>
                        <ListItem><Call className={styles.clr1} /><p>Call Us: 123-456-7898</p></ListItem>
                        <ListItem><Email className={styles.clr1} /><p>Email Us: support@cyberclothing.com</p></ListItem>
                        <ListItem><Fax className={styles.clr1} /><p>Fax : 123456</p></ListItem>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer