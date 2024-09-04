/* controlador del modelo prestamo */
import { Request, Response } from "express";
import { Prestamo } from "../models/prestamo";
import  pool from "../prestamos.json";

export const getPresatamos = (req: Request, res: Response) => {
    return res.status(200).json(pool.filter((prestamo: Prestamo) => prestamo.idcliente === parseInt(req.params.idUsuario)));
};
