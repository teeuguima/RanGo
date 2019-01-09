import { TabsPage } from './../tabs/tabs';


import { Component } from '@angular/core';
import {NavController, NavParams, ToastController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private socket: Socket, private toastCtrl: ToastController ) {
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

  /*
  nextPage(){
    this.navCtrl.push(TabsPage);
  }
  */
  nextPage(){
    this.navCtrl.push(LoginPage);
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
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 3000
    }).present();
  }

}
