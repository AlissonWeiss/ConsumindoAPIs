import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.page.html',
  styleUrls: ['./via-cep.page.scss'],
})

export class ViaCepPage implements OnInit {

  data;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  trataRetorno(retorno){
    const cep = new CEP();

    if ((retorno !== undefined || retorno != null || retorno !== '') && retorno.erro){
      cep.erro = 'Ops. Parece que este CEP não existe!';
    }

    if ((retorno !== undefined || retorno != null || retorno !== '') && !retorno.erro){
      cep.cidade = retorno.localidade;

      this.apiService.readNomeEstadoByUF(retorno.uf).then(res => {
        cep.uf = res.nome;
      }, err => {
        console.error(err);
      });
      cep.bairro = retorno.bairro;
      cep.logradouro = retorno.logradouro;
      cep.complemento = retorno.complemento;
      cep.codigoIBGE = retorno.ibge;
      cep.ddd = retorno.ddd;
    }
    return cep;
  }

  validaEstruturaCEP(cep){
    const msg = 'Ops. Parece que você forneceu um CEP inválido!';
    if (cep.length !== 8 || isNaN(cep)){
      alert(msg);
      return false;
    }
    return true;
  }

  readCep(cep){

    if (!this.validaEstruturaCEP(cep)){
      return;
    }

    this.apiService.readCEP(cep).then(result => {
      console.log(result);
      this.data = this.trataRetorno(result);
    });
  }
}

class CEP {
  cidade: string;
  uf: string;
  complemento: string;
  logradouro: string;
  bairro: string;
  codigoIBGE: string;
  ddd: string;
  erro: string;
}
