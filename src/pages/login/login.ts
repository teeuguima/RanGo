import { LoginInfo } from './../../app/app.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Socket } from 'ng-socket-io';



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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private socket: Socket) {
    socket.on('retorno-login-vendedor', (retorno) => {
      if (retorno === 0) { // sucesso
        console.log('Login realizado com sucesso!');
      } else if (retorno === 1) { // email não cadastrado
        console.log('Email não cadastrado no sistema.');
      } else if (retorno === 2) { // senha incorreta
        console.log('Senha incorreta.');
      }
    });
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
    this.socket.emit('login-vendedor', {
      email: this.email,
      senha: this.senha
    });
  }

}
