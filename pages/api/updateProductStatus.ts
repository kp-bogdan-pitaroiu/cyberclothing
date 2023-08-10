import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
    id: number;
    name: string;
    photo: string;
    quantity: number;
    status: string;
};

const productsPath = path.join(process.cwd(), 'public', 'products.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { productId, newStatus }: { productId: number, newStatus: string } = req.body;

        try {
            if (!fs.existsSync(productsPath)) {
                res.status(400).json({ success: false, message: 'Products file not found.' });
                return;
            }

            const productsData = fs.readFileSync(productsPath, 'utf8');
            const existingProducts: { products: Product[] } = JSON.parse(productsData);
            const updatedProducts: { products: Product[] } = {
                products: existingProducts.products.map((product) =>
                    product.id === productId ? { ...product, status: newStatus } : product
                ),
            };

            fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 2));

            res.status(200).json({ success: true, message: 'Product status updated successfully!' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error updating product status.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
