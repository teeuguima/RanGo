
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { AboutPage } from '../about/about';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  nome_vendedor: String = "Paulo" /*HomeInfo.getNome_Vendedor()*/;
  endereco_vendedor: String = "Av. José Bonifacio";
  descricao_vendedor: String = "Vendemos Mariscos!";
  telefone_vendedor: String = "3625-4627";


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  openMenu(){
    this.menuCtrl.open();
  }

  closeMenu(){
    this.menuCtrl.close();
  }

  toggleRightMenu(){
    this.menuCtrl.toggle('right');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  cadastrarProduto(){
    this.navCtrl.push(AboutPage);
  }


}
