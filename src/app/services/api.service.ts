import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  dataReceived;

  async readCEP(cep){

    const url = this.viaCepURL(cep);

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

  private viaCepURL = (cep) => `https://viacep.com.br/ws/${cep}/json`;
}
