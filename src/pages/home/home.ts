import { Socket } from 'ng-socket-io';
import { CarteiraPage } from './../carteira/carteira';
import { CadastroPage } from './../cadastro/cadastro';

import { HomeInfo, LoginInfo } from './../../app/app.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

import { ProdutoPage } from './../produto/produto';
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
  produtos = [];

  nome_vendedor: String = HomeInfo.getNome_Vendedor();
  endereco_vendedor: String = "Av. José Bonifacio";
  descricao_vendedor: String = "Vendemos Mariscos!";
  telefone_vendedor: String = "3625-4627";


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private socket: Socket) {

    socket.emit('lista-produto', {
      email: LoginInfo.getEmail()
    })

    socket.on('retorno-lista-produto', (produtos) => {
      this.produtos = produtos;
    });
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
    this.navCtrl.push(ProdutoPage);
  }


}
