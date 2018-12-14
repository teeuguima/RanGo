import { CadastroInfo } from './../../app/app.module';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Cadastro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cadastro2',
  templateUrl: 'cadastro2.html',
})
export class Cadastro2Page {

  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  formPagament: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  nextPage(){
    this.navCtrl.push(HomePage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro2Page');
  }

  cadastroResponsavel(){
    CadastroInfo.setNomeDono(this.nome);
    CadastroInfo.setSobreNome(this.sobrenome);
    CadastroInfo.setEmail(this.email);
    CadastroInfo.setSenha(this.senha);
    CadastroInfo.setFormaPagamento(this.formPagament);
  }

}
