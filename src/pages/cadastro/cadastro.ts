import { HomeInfo } from './../../app/app.module';
import { Cadastro2Page } from './../cadastro2/cadastro2';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome_negocio: string= "";
  endereco_negocio: string="";
  telefone_negocio: string="";
  categoria_negocio: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  nextCadaster(){
    this.navCtrl.push(Cadastro2Page);
  }

  setInfo(){
    HomeInfo.setNome_Vendedor(this.nome_negocio);
    HomeInfo.setTelefone(this.telefone_negocio);
    HomeInfo.setEndereco(this.endereco_negocio);
    HomeInfo.setCategoria(this.categoria_negocio);
  }
}
