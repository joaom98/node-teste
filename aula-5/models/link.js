import capturaLinks from "../util/regex.js";

function extraiLinks(texto) {
  const arrayResultados = capturaLinks(texto)
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

import fetch from 'node-fetch';

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const res = await fetch(url)
          return res.status;
    }))
    return arrayStatus;
  } catch(erro) {
    manejaErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  // checar se o array tá vazio
  try {
    return arrayLinks
      .map(objetoLink => Object
        .values(objetoLink).join());
  }
  catch(erro){
    manejaErros(erro)
  }
}

async function validaURLs(texto) {
  const arrayLinks = extraiLinks(texto);
  
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice]
  }))
  return resultados;
}

export  {
  extraiLinks,
  validaURLs
}