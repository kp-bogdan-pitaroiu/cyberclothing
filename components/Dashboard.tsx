import React from 'react'
import { Dashboard, Inventory, LocalShipping } from '@mui/icons-material'
import { Avatar, ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material'
import { blue } from '@mui/material/colors'
import styles from '@/styles/Dashboard.module.css'

export default function DashboardTab() {


    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Avatar sx={{ bgcolor: blue[500], width: 56, height: 56 }} />
                <h1 className={styles.name}>JOHN</h1>
                <h1 className={styles.pos}>CYBER CLOTHING</h1>
                <div>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <Inventory />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalShipping />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                </div>
            </div>
        </div >
    )
}