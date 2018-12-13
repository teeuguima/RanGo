import { socket } from 'socket.io';
import { HomeInfo, CadastroInfo } from './../../app/app.module';
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
  limite_distancia: string;
  valor_frete: string;
  CPF_Dono: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Socket:socket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  nextCadaster(){
    this.navCtrl.push(Cadastro2Page);
  }

  setInfo(){
    /*HomeInfo.setNome_Vendedor(this.nome_negocio);
    HomeInfo.setTelefone(this.telefone_negocio);
    HomeInfo.setEndereco(this.endereco_negocio);
    HomeInfo.setCategoria(this.categoria_negocio);*/

    this.Socket.connect();
    this.Socket.emit('set-dados', this.nome_negocio, this.CPF_Dono,
    this.telefone_negocio, this.valor_frete, this.categoria_negocio, this.endereco_negocio, this.CPF_Dono, this.limite_distancia);



    CadastroInfo.setNomeNegocio(this.nome_negocio);
    CadastroInfo.setTelefone(this.telefone_negocio);
    CadastroInfo.setEndereco(this.endereco_negocio);
    CadastroInfo.setCategoria(this.categoria_negocio);
    CadastroInfo.setLimiteEntrega(parseFloat(this.limite_distancia));
    CadastroInfo.setValorFrete(parseFloat(this.valor_frete));

    this.navCtrl.push(Cadastro2Page, {nome: this.nome_negocio, cpf: this.CPF_Dono,
                                     telefone: this.telefone_negocio, endereco_negocio: this.endereco_negocio
                                    ,categoria: this.categoria_negocio, valor_frete: this.valor_frete,
                                     limite:this.limite_distancia});
  }
}
