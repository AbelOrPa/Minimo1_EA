import { Request, Response } from "express";
import path from 'path';
import fs from 'fs-extra';
import Farmacovigilancia from "../Models/Farmacovigilancia";


export async function getFarmacovigilancias(req: Request, res: Response): Promise<Response> {
    try{
        
      const Farmacovigilancias = await Farmacovigilancia.find();
      
      return res.json({
        code: '200',
        message: 'Lista de unidades de farmacovigilancias',
        farmacovigilanciasList: Farmacovigilancias
      }
        );
    }

    catch{

      return res.json({
        code: '500',
        message: 'Server Down or BBDD broken',
        farmacovigilanciasList: null
      }
        );
    }
  
  }

  export async function deleteFarmacovigilancia(req: Request, res: Response): Promise<Response> {
    try{

      const farmacovigilancia = await Farmacovigilancia.findByIdAndDelete(req.params.id);

    if(farmacovigilancia){

      return res.json({
        code: '200',
        message: "Unidad de farmacovigilanci eliminada con exito:" + farmacovigilancia?.nombre
        });
      }
    else{
      return res.json({
        code: '404',
        message: "Unidad de farmacovigilancia no encontrada",
        });
      }
  
    }
    catch (e){
        console.log(e);
        return res.json({
          code: '500',
          message: "Server Down or errorn on BBDD",
          id: null});
    
      }
}

export async function createFarmacovigilancia( req: Request,  res: Response ): Promise<Response> {
    const { nombre, descripcion, responsable, telefono} = req.body;
  
    const newFarmacovigilancia = {
      nombre: nombre,
      descripcion: descripcion,
      responsable: responsable,
      telefono: telefono,
    };
    try{

        const farmacovigilancia = new Farmacovigilancia(newFarmacovigilancia);
        await farmacovigilancia.save();
    
    
    
        return res.json({
        code: '200',
        message: "Unidad de farmacovigilancia añadida correctamente",
        id: farmacovigilancia.id
        });
    }
    catch{
        return res.json({
        code: '505',
        message: "Server Down",
        });
  
    }
}