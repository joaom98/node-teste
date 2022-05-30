import express from 'express';
import {validaURLs} from '../models/link.js'

var router = express.Router();

/* GET users listing. */
router
  .post('/valida', async function (req, res, next) {
    
    const {texto} = req.body;
    
    const dados = await validaURLs(texto);

    res.send(dados);
  });


export default router;