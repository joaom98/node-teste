#!/usr/bin/env node
import express from 'express';
import links from './links.js'
import valida from './valida.js'

const rotas = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({mensagem: "Endpoints da API em /links ou /valida"})
  })
  
  app.use(
    express.json(),
    links,
    valida
  )
}


export default rotas;
