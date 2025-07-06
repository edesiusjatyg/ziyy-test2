// API route for auth resource
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { username, password } = req.body;
        // NOTE: In production, use hashed passwords and secure session handling!
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user || user.passwordHash !== password) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Dummy session response
        return res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username, role: user.role } });
      } catch (error) {
        return res.status(400).json({ error: 'Failed to login' });
      }
    default:
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
