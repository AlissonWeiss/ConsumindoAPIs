import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  readCEP(cep){
    return this.http.get(this.viaCepURL(cep));
  }

  private viaCepURL = (cep) => `http://viacep.com.br/ws/${cep}/json`;
}
