import React, { useState } from "react";
import styles from "@/styles/OrdersChart.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const initialData = [
    {
        month: "February",
        Income: 4000,
        Orders: 2400,
    },
    {
        month: "March",
        Income: 3000,
        Orders: 1398,
    },
    {
        month: "April",
        Income: 2000,
        Orders: 9800,
    },
    {
        month: "May",
        Income: 2780,
        Orders: 3908,
    },
    {
        month: "June",
        Income: 1890,
        Orders: 4800,
    },
    {
        month: "July",
        Income: 2390,
        Orders: 3800,
    }
];

export default function App() {
    const [data, setData] = useState(initialData);

    const updateData = (newMonthData: any) => {
        setData(prevData => [...prevData.slice(1), newMonthData]);
    };

    return (
        <div className={styles.main}>
            <h3>Orders/Income for the Last 6 Months</h3>
            <BarChart
                width={600}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Orders" fill="#999" />
                <Bar dataKey="Income" fill="#5098f8" />
            </BarChart>
        </div>
    );
}
