
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Socket} from 'ng-socket-io';
import { LoginPage } from '../login/login';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


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

  vendedor = {
    'nome'           :'',
    'endereco'       :'',
    'telefone'       :'',
    'categoria'      :'',
    'limite'         :'',
    'frete'          :'',
    'cpf'            :'',
    'nomeResponsavel':'',
    'sobrenome'      :'',
    'email'          :'',
    'senha'          :'',
    'formPagament'   :'',
    'sexo'           :''
  };

  private vendedorAtual;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public socket: Socket, 
              private toastCtrl: ToastController,
              public dbService : FirebaseServiceProvider
              ) {
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

    // pegando variaveis do cadastro1 e interando aqui

    this.vendedor.nome = navParams.get('nome');
    this.vendedor.endereco = navParams.get('endereco');
    this.vendedor.telefone = navParams.get('telefone');
    this.vendedor.categoria = navParams.get('categoria');
    this.vendedor.limite = navParams.get('limite');
    this.vendedor.frete = navParams.get('frete');
    this.vendedor.cpf = navParams.get('cpf');



    
    this.vendedorAtual = this.dbService.getAllVendedor();

    /*
    let retorno : any;
    this.vendedorAtual.array.forEach(element => {
      if(element.cpf === this.vendedor.cpf){
        retorno = 0;
      }
      else if(element.email === this.vendedor.email){
        retorno = 1;
      }
      else {
        retorno = 2;
      }
    });
    */
    
  }

  salvarVendedor(vendedor){
    this.dbService.saveVendedor(vendedor);
    this.navCtrl.push(LoginPage);
  }

  
  



  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro2Page');
  }

  

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 3000
    }).present();
  }

}
