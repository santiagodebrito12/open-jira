// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from '@/database'
import { seedData } from '@/database/seed-data';
import { Entry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,

}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
   if(process.env.NODE_ENV === 'production'){
    return res.status(401).json({message:'not allowed'})
   }
   
   await db.connect();

   await Entry.deleteMany();
   await Entry.insertMany(seedData.entries);

   await db.disconnect();
   res.status(200).json({message:'conectado a mongo '})
 }