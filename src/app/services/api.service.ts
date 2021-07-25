import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  dataReceived;

  async requestByUrl(url){
    await Http.request(
      {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        params:{},
        url: url
      }).then(result => {
        this.dataReceived = result.data;
      }, (err => {
        this.dataReceived = err.data;
      }))

      return this.dataReceived;
  }

  async readNomeEstadoByUF(uf){
    const url = this.servicoDadosIBGE(uf);
    return this.requestByUrl(url);
  }

  async readCEP(cep){
    const url = this.viaCepURL(cep);
    return this.requestByUrl(url);
  }

  private viaCepURL = (cep) => `https://viacep.com.br/ws/${cep}/json`;
  private servicoDadosIBGE = (uf) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`;
}
