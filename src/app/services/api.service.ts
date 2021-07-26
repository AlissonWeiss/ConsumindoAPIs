import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  dataReceived;

  private async requestByUrl(url){
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
    return await this.requestByUrl(url);
  }

  async readCEP(cep){
    const url = this.viaCepURL(cep);
    return await this.requestByUrl(url);
  }

  async readCensoNome(nome){
    const url = this.servicoNomesIBGE(nome);
    return await this.requestByUrl(url);
  }

  private viaCepURL = (cep) => `https://viacep.com.br/ws/${cep}/json`;
  private servicoDadosIBGE = (uf) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`;
  private servicoNomesIBGE = (nome) => `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`;
}
