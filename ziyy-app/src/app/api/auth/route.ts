// API route for auth resource
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      // TODO: Implement login/signup logic
      return res.status(200).json({ message: 'POST auth' });
    default:
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
