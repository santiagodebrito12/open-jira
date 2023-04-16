// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  number:number,
  method:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>) 
  {
  res.status(200).json({
     name: 'John Doe',
     number: 123 ,
     method:req.method || 'GET', 
    })
    
}

