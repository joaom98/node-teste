import capturaLinks from "../util/regex.js";
import checaStatus from "../util/statusCodes.js";

class ListaLinks {
  static extraiLinks(texto) {
    const arrayResultados = capturaLinks(texto)
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
  }

  static async validaURLs(texto) {
    const arrayLinks = this.extraiLinks(texto);

    const links = arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join());

    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks.map((objeto, indice) => ({
      ...objeto,
      status: statusLinks[indice]
    }))
    return resultados;
  }
}


export default ListaLinks;