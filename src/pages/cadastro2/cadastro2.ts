import { CadastroInfo } from './../../app/app.module';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Socket} from 'ng-socket-io';
import { LoginPage } from '../login/login';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public socket: Socket, private toastCtrl: ToastController ) {
    socket.on('retorno-cadastro-vendedor', (retorno) => {
      if (retorno === 0) { // sucesso
        this.showToast('Cadastro realizado com sucesso.');
        navCtrl.push(LoginPage);
      } else if (retorno === 1) { // cpf repetido
        this.showToast('Cadastro não realizado. CPF já cadastrado no sistema.');
      } else if (retorno === 2) { // email repetido
        this.showToast('Cadastro não realizado. Email já cadastrado no sistema.');
      }
    });
  }

  nextPage(){
    this.cadastroResponsavel();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro2Page');
  }

  cadastroResponsavel(){
    this.socket.emit('cadastro-vendedor', {
      nomeNegocio: this.navParams.get('nome'),
      cpf: this.navParams.get('cpf'),
      telefone: this.navParams.get('telefone'),
      categoriaEstabelecimento: this.navParams.get('categoria'),
      limiteEntrega: this.navParams.get('limite'),
      valorFrete: this.navParams.get('frete'),
      nomeVendedor: this.nomeResponsavel,
      sobrenomeVendedor: this.sobrenome,
      sexo: 'M',
      email: this.email,
      senha: this.senha,
      formaPagamento: this.formPagament,
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 3000
    }).present();
  }

}
