import express from 'express';
import {extraiLinks} from '../models/link.js'

var router = express.Router();

/* GET users listing. */
router
  .post('/links', function (req, res, next) {
    const {texto} = req.body;

    const resultado = extraiLinks(texto)
    res.send(resultado);
  });

export default router;