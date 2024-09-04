import express from 'express'
import { getPresatamos } from '../controllers/prestamoController';
/* import { getJuegos, getJuegoById, createJuego, updateJuego, deleteJuego, deleteAll } from "../controllers/"; */

const router = express.Router();

// Metodo Post // //Crear juego //
router.post('/crearJuego', );

// Metodo Get // // Obtener todos los juegos //
router.get('/api/prestamos/${idUsuario}', getPresatamos
);
/* 
// Metodo Get // // Obtener juego por id //
router.get('/juego/:id', getJuegoById);

// Metodo Put // // Actualizar juego //
router.put('/juego/:id', updateJuego);

// Metodo Delete // // Eliminar juego //
router.delete('/juego/:id', deleteJuego);

router.delete('/juego', deleteAll);
 */
export default router;