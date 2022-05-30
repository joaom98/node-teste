import express from 'express';
import ListaLinksController from '../controllers/ListaLinksControllers.js';

var router = express.Router();

router
  .post('/links/valida', ListaLinksController.valida)
  .post('/links',ListaLinksController.extrai) 

export default router;