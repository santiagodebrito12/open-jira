import type { NextApiResponse , NextApiRequest } from "next";
import mongoose from "mongoose";
import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import { disconnect } from "process";

type Data = 
|{id:number}
|{message:string}
|IEntry


export default function handler(req:NextApiRequest,res:NextApiResponse){
   
    const { id } = req.query
   
    if( !mongoose.isValidObjectId(id)){
        return res.status(400).json({message:id})    
    }

    switch (req.method) {
        case 'PUT':
            return upDateEntry(req,res);
        case 'DELETE':
            return deleteEntry(req,res)

        default:
            res.status(400).json({message:'Bad request'})   
    }    
   
}

const upDateEntry = async(req:NextApiRequest,res:NextApiResponse<Data>) =>{
    const { id } = req.query;
    
    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    
    if(!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message:' invalido '});
    }

    const{
        //En este caso si no viene una description y un status por parametros, tomo los que ya teniamos.


        description = entryToUpdate.description,
        status = entryToUpdate.status
    }=req.body;
    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id,{description,status},{runValidators:true,new:true});
        await db.disconnect();
        res.status(200).json(updatedEntry!)      
    } catch (error:any) {
        await db.disconnect();
        res.status(400).json({message: error.errors.status.message})
    }
}

const deleteEntry = async (req:NextApiRequest,res:NextApiResponse) =>{
    const { id } = req.query;
    
    await db.connect();

    const entryToDelete = await Entry.findById(id);

    
    if(!entryToDelete){
        await db.disconnect();
        return res.status(400).json({message:'entry no encontrado '});
    }
    try {
        const deleteEntry = await Entry.findByIdAndDelete(id);
        await db.disconnect();

        res.status(200).json({message: 'entry eliminada correctamente'});    
    } catch (error:any) {
        await db.disconnect();
        res.status(400).json({message: 'no se pudo eliminar'})
    }   
}