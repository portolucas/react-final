import axios from "axios";

export class CepService {

  static _withBaseUrl(query) {
    return `https://api.postmon.com.br/v1/cep/${query}`; // carro, moto ou caminhão
  }

  static getAndress(andress) {
    return axios(CepService._withBaseUrl(andress));
  }
}
