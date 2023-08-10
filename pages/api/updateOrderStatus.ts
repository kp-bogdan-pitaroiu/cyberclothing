import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Order = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    price: number;
    status: string;
    products: {
        id: number;
        name: string;
        photo: string;
        quantity: number;
    }[];
};

const ordersPath = path.join(process.cwd(), 'public', 'orders.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { orderId, newStatus }: { orderId: number, newStatus: string } = req.body;

        try {
            if (!fs.existsSync(ordersPath)) {
                res.status(400).json({ success: false, message: 'Orders file not found.' });
                return;
            }

            const ordersData = fs.readFileSync(ordersPath, 'utf8');
            const existingOrders: Order[] = JSON.parse(ordersData);
            const updatedOrders: Order[] = existingOrders.map((order) =>
                order.id === orderId ? { ...order, status: newStatus } : order
            );

            fs.writeFileSync(ordersPath, JSON.stringify(updatedOrders, null, 2));

            res.status(200).json({ success: true, message: 'Order status updated successfully!' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error updating order status.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
