import React from 'react'
import Link from 'next/link'
import { Dashboard, Inventory, LocalShipping, KeyboardArrowRight, Login } from '@mui/icons-material'
import { Avatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { blue } from '@mui/material/colors'
import styles from '@/styles/Dashboard.module.css'

export default function DashboardTab() {


    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.userProfile}>
                    <Avatar sx={{ bgcolor: blue[500], width: 56, height: 56 }} />
                    <h1 className={styles.name}>JOHN</h1>
                    <h1 className={styles.pos}>CYBER CLOTHING</h1>
                </div>
                <div>
                    <Link href="/backend">
                        <ListItemButton className={styles.btn} >
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    <Link href="/backend/products">
                        <ListItemButton className={styles.btn}>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                            <KeyboardArrowRight fontSize="small" />
                        </ListItemButton>
                    </Link>
                    <Link href="/backend/orders">
                        <ListItemButton className={styles.btn}>
                            <ListItemIcon>
                                <LocalShipping />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                            <KeyboardArrowRight fontSize="small" />
                        </ListItemButton>
                    </Link>
                    <Link href="/backend/login">
                        <ListItemButton className={styles.btn}>
                            <ListItemIcon>
                                <Login />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    </Link>
                </div>
            </div>
        </div >
    )
}