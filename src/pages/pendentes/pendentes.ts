import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariableAst } from '@angular/compiler';
import { DetalPedidoPage } from '../detal-pedido/detal-pedido';

/**
 * Generated class for the PendentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendentes',
  templateUrl: 'pendentes.html',
})
export class PendentesPage {

  hideButtons = true;
  hideText = false;
  statusPedido: string;

  nome_cliente: string = 'Augusto Luis';
  pedido: string = 'Hamburguer';
  preco: number = 39;
  data: string = '10/12/2018'
  horario: string = '15:20';
  quantidade: number = 10;
  detalhesPedido = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendentesPage');
  }

  abrirPage(){
    this.navCtrl.push(LoginPage);
  }


  hide(campo: number){
    this.hideButtons = false;
    if(campo == 1){
      this.statusPedido = 'Pedido Aceito';
      this.navCtrl.push(DetalPedidoPage, { status: this.statusPedido});
    }else if(campo == 2){
      this.statusPedido = 'Pedido Recusado';
    }
    this.hideText = true;
  }









}
