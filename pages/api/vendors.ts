// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// Task 1 Cristi
// create POST call NextJs
// recive on the post call email and password from login screen
// fetch vendors.json file
//  comare usrename and password against the json file
//  return a true or false reposnse if you xan find it in the json