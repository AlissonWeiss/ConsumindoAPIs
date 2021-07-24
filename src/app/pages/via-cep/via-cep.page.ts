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

  retornaUFCompleto(uf){
    switch(uf){
      case 'AC':
        return 'Acre';
      case 'AL':
        return 'Alagoas';
      case 'AP':
        return 'Amapá';
      case 'AM':
        return 'Amazonas';
      case 'BA':
        return 'Bahia';
      case 'CE':
        return 'Ceará';
      case 'DF':
        return 'Distrito Federal';
      case 'ES':
        return 'Espirito Santo';
      case 'GO':
        return 'Goiás';
      case 'MA':
        return 'Maranhão';
      case 'MT':
        return 'Mato Grosso';
      case 'MS':
        return 'Mato Grosso do Sul';
      case 'MG':
        return 'Minas Gerais';
      case 'PA':
        return 'Pará';
      case 'PB':
        return 'Paraíba';
      case 'PR':
        return 'Paraná';
      case 'PE':
        return 'Pernambuco';
      case 'PI':
        return 'Piauí';
      case 'RJ':
        return 'Rio de Janeiro';
      case 'RN':
        return 'Rio Grande do Norte';
      case 'RS':
        return 'Rio Grande do Sul';
      case 'RO':
        return 'Rondônia';
      case 'RR':
        return 'Roraima';
      case 'SC':
        return 'Santa Catarina';
      case 'SP':
        return 'São Paulo';
      case 'SE':
        return 'Sergipe';
      case 'TO':
        return 'Tocantins';
      default:
        return uf;
    }
  }

  trataRetorno(retorno){
    const cep = new CEP();

    if (retorno.erro){
      cep.erro = 'Ops. Parece que este CEP não existe!';
    }

    if ((retorno !== undefined || retorno != null || retorno !== '') && !retorno.erro){
      cep.cidade = retorno.localidade;
      cep.uf = this.retornaUFCompleto(retorno.uf);
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

    this.apiService.readCEP(cep).subscribe(result => {
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
