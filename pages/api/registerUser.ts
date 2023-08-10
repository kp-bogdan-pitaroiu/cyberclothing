import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

const vendorsPath = path.join(process.cwd(), 'public', 'vendors.json');

function getNextUserId(existingUsers: User[]): number {
    const lastUserId = existingUsers.reduce((maxId, user) => Math.max(maxId, user.id), 0);
    return lastUserId + 1;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password }: User = req.body;
        const newUser: User = {
            id: 0,
            name,
            email,
            password,
        };
        try {
            if (!fs.existsSync(vendorsPath)) {
                fs.writeFileSync(vendorsPath, '[]', 'utf8');
            }
            const vendorsData = fs.readFileSync(vendorsPath, 'utf8');
            const existingUsers: User[] = JSON.parse(vendorsData);
            newUser.id = getNextUserId(existingUsers);

            const updatedUsers: User[] = [...existingUsers, newUser];

            fs.writeFileSync(vendorsPath, JSON.stringify(updatedUsers, null, 2));

            res.status(200).json({ success: true, message: 'User registered successfully!' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error registering the user.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
