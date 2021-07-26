import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consulta-nome-ibge',
  templateUrl: './consulta-nome-ibge.page.html',
  styleUrls: ['./consulta-nome-ibge.page.scss'],
})
export class ConsultaNomeIBGEPage implements OnInit {

  constructor(private apiService: ApiService) { }

  data;

  ngOnInit() {
  }

  isNomeValido(nome){
    const msg = 'Ops. Parece que este nome não é valido!';
    if (nome == ''){
      alert(msg)
      return false;
    }
    return true;
  }

  trataPeriodo(periodo){
    periodo = periodo.replaceAll('[', '');
    periodo = periodo.replaceAll(']', '');
    periodo = periodo.replaceAll(',', ' à ');

    return periodo;
  }

  trataRetorno(retorno){
    const listaDados = [];
    debugger
    if ((retorno !== undefined || retorno != null || retorno !== '') && retorno.length > 0){
      for (var i = 0; i< retorno.length; i++){
        const nomes = new Nomes();
        nomes.dadosNome = new Array();
        let dado = retorno[i];

        nomes.nome = dado.nome;
        nomes.localidade = dado.localidade;

        for (var j = 0; j < dado.res.length; j++){
          const dadosNome = new DadosNome();
          let dadoRes = dado.res[j];

          dadosNome.periodo = this.trataPeriodo(dadoRes.periodo);
          dadosNome.frequencia = dadoRes.frequencia;

          nomes.dadosNome.push(dadosNome);
        }

        listaDados.push(nomes);
      }
    }
    return listaDados;
  }

  readName(nome){
    if (this.isNomeValido(nome)){
      this.apiService.readCensoNome(nome).then(result => {
        this.data = this.trataRetorno(result);
        debugger
      })
    }
  }
}

class Nomes {
  nome: string;
  localidade: string;
  dadosNome: Array<DadosNome>;
}

class DadosNome {
  periodo: string;
  frequencia: number;
}
