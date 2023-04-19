import type { NextApiRequest,NextApiResponse } from "next";
import { connect } from '../../../database/db';
import { db } from "@/database";
import { Entry,IEntry } from "@/models";
import { NextRequest } from "next/server";
import EntryModel from "@/models/Entry";

type Data = 
 |{ message:string}
 |IEntry[]
 |IEntry

 export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>) 
    {

    switch (req.method) {
        case 'GET':
            return getEntries(res)
            
        case 'POST':
            return setEntrie(req,res);

        default:
            return res.status(404).json({message:'Endpoint no existe'});
    }
      
  }
  
const getEntries = async(res:NextApiResponse<Data>) =>{

    await db.connect();
    
    const entries = await Entry.find().sort({createdAt:'ascending'});




    await db.disconnect();

    res.status(200).json(entries);

}

const setEntrie = async(req:NextApiRequest,res:NextApiResponse<Data>) =>{
   
  

    const{description}=req.body;
    
    if(!description) return res.status(400).json({message:"debes agregar una descripction"});
    
    const newEntry = new Entry({
        description,
        createdAt: Date.now(),
        status:"pending",
        
    });
   
    try {
        db.connect();

        await newEntry.save();

        await db.disconnect();
        res.status(201).json(newEntry);
    } catch (error) {
        
        await db.disconnect();
        console.log(error);
    
        return res.status(400).json({message:"error en la conexion"})

    }
 
    
   

}