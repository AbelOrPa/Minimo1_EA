//import multer from "../libs/multer";
import { Router } from "express";
import { createFarmacovigilancia, deleteFarmacovigilancia, getFarmacovigilancias } from "../Controllers/farmacovigilancia.controller";

const router = Router();

export default router;

//Rutas para obtener lista
router.route("/farmacovigilancias")
    .get(getFarmacovigilancias)


//Ruta para eliminar unidad de farmacovigilancia
router.route("/farmacovigilancia/:id")
    .delete(deleteFarmacovigilancia)

//Ruta para añadir nueva unidad 
router.route("/farmacovigilancia")
    .post(createFarmacovigilancia)