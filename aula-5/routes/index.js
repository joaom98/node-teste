#!/usr/bin/env node
import express from 'express';
import links from './links.js';

const rotas = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({mensagem: "Endpoints da API em /links ou /valida"})
  })
  
  app.use(
    express.json(),
    links
  )
}

export default rotas;
