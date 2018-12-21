import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  nome_produto: string="";
  tempo_produto: string="";
  preco_produto: string="";
  ingredientes_produto: string="";
  disponivel = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socket: Socket, private toastCtrl: ToastController) {
    socket.on('retorno-cadastro-produto', (retorno) => {
      if (retorno === 0) { // sucesso
        this.showToast('Produto cadastrado com sucesso!');
        this.nome_produto = '';
        this.tempo_produto = '';
        this.preco_produto = '';
        this.ingredientes_produto = '';
        this.disponivel = false;
      } else { // nunca deve entrar aqui
        this.showToast('Ocorreu um erro durante o cadastro do produto.');
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

  cadastrar() {
    this.socket.emit('cadastro-produto', {
      nome: this.nome_produto,
      preco: this.preco_produto,
      tempoMedioPreparo: this.tempo_produto,
      descricao: this.ingredientes_produto,
      disponivel: this.disponivel
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 3000
    }).present();
  }

}
