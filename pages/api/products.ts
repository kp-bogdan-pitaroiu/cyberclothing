import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

type Data = {
  name: string;
};

type Products = {
  id: number;  
  photo: string;
  name: string;
  price: number;
  status: string;
  category: string;
  description: string;
  vendorId: string;
};

const productsPath = path.join(process.cwd(), 'public', './public/products.json');

function getNextProductsId(existingProducts: Products[]): number {
  const lastProductsId = existingProducts.reduce((maxId, products) => Math.max(maxId, products.id), 0);
  return lastProductsId + 1;
}
export async function add_object( 
req: NextApiRequest, 
res: NextApiResponse<Products>
) {
  if (req.method === 'POST') {
      const { photo, name, price, status, category, description, vendorId }: Products = req.body;
      const newProducts: Products = {
          id: 0,
          photo,
          name,
          price,
          status,
          category,
          description,
          vendorId,
      };
      try {
        if (!fs.existsSync(productsPath)) {
            fs.writeFileSync(productsPath, '[]', 'utf8');
        }
        const productsData = fs.readFileSync(productsPath, 'utf8');
        const existingProducts: Products[] = JSON.parse(productsData);
        newProducts.id = getNextProductsId(existingProducts);

        const updatedProducts: Products[] = [...existingProducts, newProducts];

        fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 2));

        res.status(200).json({success: true, message: 'Product added successfully!' });
    } catch (error) {
        res.status(500).json({success: false, message: 'Error adding the product.' });
    }
} else {
    res.status(405).json({success: false, message: 'Method not allowed.' });
}
}

export async function edit(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const fileData = await fs.readFile('./public/products.json', 'utf-8');
    const jsonData = JSON.parse(fileData);

    // Actualizăm obiectul JSON cu noile date primite în cererea `req.body`
    const updatedData = {
      ...jsonData,
      ...req.body,
    };

    // Rescriem fișierul JSON cu datele actualizate
    await fs.writeFile('./public/products.json', JSON.stringify(updatedData, null, 2));

    console.log('Fișierul JSON a fost rescris cu succes.');

    res.status(200).json({ name: 'John Doe 2' });
  } catch (error) {
    console.log('Eroare la rescrierea fișierului JSON:', error);
    res.status(500).json({ error: 'Error reading data' });
  }
}

