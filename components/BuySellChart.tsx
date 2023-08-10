import React from "react";
import styles from "@/styles/BuySellChart.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    {
        name: "",
        uv: 4000,
        pv: 2400,
        amt: 2400,
        ovt: 3000
    },
    {
        name: "10",
        uv: 3000,
        pv: 1398,
        amt: 2210,
        ovt: 8900
    },
    {
        name: "20",
        uv: 2000,
        pv: 9800,
        amt: 2290,
        ovt: 2300
    },
    {
        name: "30",
        uv: 2780,
        pv: 3908,
        amt: 2000,
        ovt: 5400
    },
    {
        name: "40",
        uv: 1890,
        pv: 4800,
        amt: 2181,
        ovt: 2900
    },
    {
        name: "50",
        uv: 2390,
        pv: 3800,
        amt: 2500,
        ovt: 3400
    },
    {
        name: "60",
        uv: 3490,
        pv: 4300,
        amt: 2100,
        ovt: 4900
    }
];

export default function App() {
    return (
        <div className={styles.main}>
            <h3> Buy / Sell</h3>
            <LineChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#999" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#5098f8" />
                <Line type="monotone" dataKey="amt" stroke="#05e177" />
                <Line type="monotone" dataKey="ovt" stroke="#b042ff" />
            </LineChart>
        </div>
    );
}
