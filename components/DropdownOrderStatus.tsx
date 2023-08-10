import React from 'react';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styles from '@/styles/Orders.module.css';

interface DropdownOrderStatusProps {
    currentStatus: string;
    updateStatus: (newStatus: string) => void;
    orderId: number;
}

export default function DropdownOrderStatus(props: DropdownOrderStatusProps) {
    const { currentStatus, updateStatus, orderId } = props;

    const handleChange = async (event: SelectChangeEvent) => {
        const newStatus = event.target.value as string;
        try {
            const response = await fetch(`/api/updateOrderStatus`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderId, newStatus }),
            });

            if (response.ok) {
                updateStatus(newStatus);
            } else {
                throw new Error('Error updating order status');
            }
        } catch (error) {
            console.log('Error updating order status: ', error)
        }
    };

    const getLabelColor = (value: string) => {
        switch (value) {
            case 'in progress':
                return 'orange';
            case 'delivered':
                return 'green';
            case 'canceled':
                return 'red';
            default:
                return 'black';
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" fullWidth sx={{ textAlign: 'center' }}>
                <Select
                    className={styles.select}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={currentStatus}
                    label="Order Status"
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        '& .MuiSelect-select:not(.Mui-focused)': {
                            color: getLabelColor(currentStatus),
                        },
                    }}
                >
                    <MenuItem className={styles.inprogress} value={"in progress"}>In progress</MenuItem>
                    <MenuItem className={styles.delivered} value={"delivered"}>Delivered</MenuItem>
                    <MenuItem className={styles.canceled} value={"canceled"}>Canceled</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
