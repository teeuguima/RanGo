

import { Cadastro2Page } from './../cadastro2/cadastro2';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome_negocio: string= "";
  endereco_negocio: string="";
  telefone_negocio: string="";
  categoria_negocio: string="";
  limite_distancia: string;
  valor_frete: string;
  CPF_Dono: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  nextCadaster(){
    this.navCtrl.push(Cadastro2Page, {
      nome: this.nome_negocio,
      endereco: this.endereco_negocio,
      telefone: this.telefone_negocio,
      categoria: this.categoria_negocio,
      limite: this.limite_distancia,
      frete: this.valor_frete,
      cpf: this.CPF_Dono
    });
  }

  setInfo(){
    /*HomeInfo.setNome_Vendedor(this.nome_negocio);
    HomeInfo.setTelefone(this.telefone_negocio);
    HomeInfo.setEndereco(this.endereco_negocio);
    HomeInfo.setCategoria(this.categoria_negocio);*/

    /*
    CadastroInfo.setNomeNegocio(this.nome_negocio);
    CadastroInfo.setTelefone(this.telefone_negocio);
    CadastroInfo.setEndereco(this.endereco_negocio);
    CadastroInfo.setCategoria(this.categoria_negocio);
    CadastroInfo.setLimiteEntrega(parseFloat(this.limite_distancia));
    CadastroInfo.setValorFrete(parseFloat(this.valor_frete));
    */

  }
}
