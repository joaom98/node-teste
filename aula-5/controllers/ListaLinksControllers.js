import ListaLinks from '../models/link.js';

class ListaLinksController{

  static async extrai (req, res) {
    const { texto } = req.body;
    const dados = await ListaLinks.extraiLinks(texto);
    res.send(dados);
  }

  static async valida (req, res) {
    const { texto } = req.body;
    const dados = await ListaLinks.validaURLs(texto);
    res.send(dados);
  }
}


export default ListaLinksController;