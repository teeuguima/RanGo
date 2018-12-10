import { LoginInfo } from './../../app/app.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   email: string;
   senha: string;
  private emailRecuperar: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
    LoginInfo.setEmail(this.email);
    LoginInfo.setSenha(this.senha);
  }


}
