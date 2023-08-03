import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
    id: number;
    name: string;
    photo: string;
    quantity: number;
};

type Order = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string,
    address: string;
    price: number;
    status: string,
    products: Product[];
};

const ordersPath = path.join(process.cwd(), 'public', 'orders.json');

function getNextOrderId(existingOrders: Order[]): number {
    const lastOrderId = existingOrders.reduce((maxId, order) => Math.max(maxId, order.id), 0);
    return lastOrderId + 1;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phoneNumber, price, address, products }: Order = req.body;
        const newOrder: Order = {
            id: 0,
            name,
            email,
            phoneNumber,
            address,
            price,
            status: "In progress",
            products,
        };
        try {
            if (!fs.existsSync(ordersPath)) {
                fs.writeFileSync(ordersPath, '[]', 'utf8');
            }
            const ordersData = fs.readFileSync(ordersPath, 'utf8');
            const existingOrders: Order[] = JSON.parse(ordersData);
            newOrder.id = getNextOrderId(existingOrders);

            const updatedOrders: Order[] = [...existingOrders, newOrder];

            fs.writeFileSync(ordersPath, JSON.stringify(updatedOrders, null, 2));

            res.status(200).json({ success: true, message: 'Order placed successfully!' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error placing the order.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
