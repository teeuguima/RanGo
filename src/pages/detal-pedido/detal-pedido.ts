import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detal-pedido',
  templateUrl: 'detal-pedido.html',
})
export class DetalPedidoPage {



  nome_cliente: string = 'Augusto Luis';
  pedido: string = 'Hamburguer';
  preco: number = 39;
  data: string = '10/12/2018'
  horario: string = '15:20';
  quantidade: number = 10;
  detalhesPedido = [];
  statusPedido = this.navParams.get(status);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalPedidoPage');
  }

}
