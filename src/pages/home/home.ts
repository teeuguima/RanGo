import { HomeInfo } from './../../app/app.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  nome_vendedor: String = HomeInfo.getNome_Vendedor();
  endereco_vendedor: String = "Av. José Bonifacio";
  descricao_vendedor: String = "Vendemos Mariscos!";
  telefone_vendedor: String = "3625-4627";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



}
