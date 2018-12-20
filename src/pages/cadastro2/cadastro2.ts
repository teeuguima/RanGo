import { CadastroInfo } from './../../app/app.module';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Socket} from 'ng-socket-io';


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

  nomeResponsavel: string;
  sobrenome: string;
  email: string;
  senha: string;
  formPagament: string;
  sexo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public socket: Socket ) {
  }

  nextPage(){
    this.navCtrl.push(HomePage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro2Page');
  }

  cadastroResponsavel(){
    this.socket.emit('cadastro-vendedor',{
      nome_responsavel: this.nomeResponsavel,
      sobrenome_responsavel: this.sobrenome,
      nome_negocio: this.navParams.get('nome'),
      endereco_negocio: this.navParams.get('endereco'),
      telefone_responsavel: this.navParams.get('telefone'),
      categoria_negocio: this.navParams.get('categoria'),
      limite_venda: this.navParams.get('limite'),
      valor_frete: this.navParams.get('frete'),
      cpf_responsavel: this.navParams.get('cpf'),
      pagamento: this.formPagament,
      email: this.email,
      senha: this.senha
    })
  }

}
