import { LoginInfo } from './../../app/app.module';

import { Socket } from 'ng-socket-io';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ProdutoPage } from '../produto/produto';
import { ContactPage } from '../contact/contact';



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

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  list_produtos = [];
  nome_vendedor: String = LoginInfo.getEmail(); /*"Paulo" /*HomeInfo.getNome_Vendedor()*/
  endereco_vendedor: String = "Av. José Bonifacio";
  descricao_vendedor: String = "Vendemos Mariscos!";
  telefone_vendedor: String = "3625-4627";
  cpf_vendedor : number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public socket: Socket) {


    socket.on('retorno-lista-produto', (produtos)=>{
      this.list_produtos=produtos;
    });

    socket.on('retorno-cpf-vendedor', (dado)=>{
      this.cpf_vendedor = dado;
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

  listarProduto(){
    this.socket.emit('list-produto',{
      email: this.nome_vendedor
    } );
  }





}
