import { LoginInfo, HomeInfo } from './../../app/app.module';

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Socket } from 'ng-socket-io';

import { TabsPage } from '../tabs/tabs';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { x } from 'tar';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;
  private emailRecuperar: String;
  vendedorAtual: any;
  retorno : any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public dbService : FirebaseServiceProvider ) {
    

      /*
      if (retorno === 0) { // sucesso
        console.log('Login realizado com sucesso!');
        this.navCtrl.push(TabsPage);
        LoginInfo.setEmail(this.email);
      } else if (retorno === 1) { // email não cadastrado
        console.log('Email não cadastrado no sistema.');
      } else if (retorno === 2) { // senha incorreta
        console.log('Senha incorreta.');
      }
    
      */


    // Confirmação de login
    this.vendedorAtual = this.dbService.getAllVendedor();
    var i;
    for(i = 0; i < this.vendedorAtual.lentgh; i++){
      if(this.email === this.vendedorAtual.email && this.senha === this.vendedorAtual.senha){
        this.retorno = 0;
      }
    }
    if(this.retorno === 0){
      console.log('Login realizado com sucesso!');
      this.navCtrl.push(HomePage);
    }
  }

  showAlertConfirm(){
    const alert = this.alertCtrl.create({
      title: 'Confirmação',
      subTitle: 'Link de confirmação enviado para'+this.emailRecuperar,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertNulo(){
    const alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'E-mail não cadastrado ou incorreto',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  showPrompt(){

    const prompt = this.alertCtrl.create({
        title: 'E-mail de Recuperação',
        message: "Insira o e-mail usado para fazer login, será enviado um link de confirmação",

        inputs:[
          {
            name: 'email',
            placeholder: 'Email'
          },

        ],

        buttons:[
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancelar clicked');
            }
          },
          {
            text: 'Enviar',
            handler: data =>{
              console.log(this.emailRecuperar);

            }
          }

        ]
    });
    prompt.present();
  }

  confirmAlert(){
    if(this.emailRecuperar != null){
      this.showAlertConfirm();
    }else{
      this.showAlertNulo();
    }
  }

  confirmLogin(){

  }

  clickEntrar() {
    var i;
    var x : any;
    for(i = 0; i < this.vendedorAtual.lentgh; i++){
      if(this.email === this.vendedorAtual.email && this.senha === this.vendedorAtual.senha){
        this.retorno = 0;
      }
    }
    if(this.retorno === 0){
      console.log('Login realizado com sucesso!');
      this.navCtrl.push(HomePage);
      
    }

    };
}
