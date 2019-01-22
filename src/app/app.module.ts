
import { DetalPedidoPageModule } from './../pages/detal-pedido/detal-pedido.module';
import { DetalPedidoPage } from './../pages/detal-pedido/detal-pedido';
import { PendentesPageModule } from './../pages/pendentes/pendentes.module';
import { CarteiraPageModule } from './../pages/carteira/carteira.module';
import { ProdutoPage } from './../pages/produto/produto';
import { CarteiraPage } from './../pages/carteira/carteira';
import { NgModule, ErrorHandler, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import{Geolocation} from '@ionic-native/geolocation';
import {IonicStorageModule} from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { Cadastro2PageModule } from '../pages/cadastro2/cadastro2.module';
import { HomePageModule } from '../pages/home/home.module';
import { ProdutoPageModule } from '../pages/produto/produto.module';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { Cadastro2Page } from '../pages/cadastro2/cadastro2';
import { PendentesPage } from '../pages/pendentes/pendentes';
import { AngularFireModule } from 'angularfire2'
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    CadastroPageModule,
    Cadastro2PageModule,
    HomePageModule,
    ProdutoPageModule,
    CarteiraPageModule,
    SocketIoModule.forRoot(config),
    PendentesPageModule,
    DetalPedidoPageModule,
    AngularFireModule.initializeApp(

      {
        apiKey: "AIzaSyCMLK9LsP3XDfk_4mlG3ohGpxfLfV3rl0Y",
        authDomain: "rangobd-92bda.firebaseapp.com",
        databaseURL: "https://rangobd-92bda.firebaseio.com",
        projectId: "rangobd-92bda",
        storageBucket: "rangobd-92bda.appspot.com",
        messagingSenderId: "1074311459018"
      }

    ),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    Cadastro2Page,
    CarteiraPage,
    ProdutoPage,
    PendentesPage,
    DetalPedidoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}

@Injectable()
export class LoginInfo{
  private static email: string;
  private static senha: string;
  private static cpf: number;

  static setEmail(email: string){
    this.email = email;
  }

  static getEmail(){
    return this.email;
  }


  static setCPF(email: string){
    this.email = email;
  }

  static getCPF(){
    return this.email;
  }

  static setSenha(senha: string){
    this.senha = senha;
  }

  static getSenha(){
    return this.senha;
  }
}

@Injectable()
export class CadastroInfo{

  private  nome_negocio: string;
  private  endereco_fixo: string;
  private  telefone_negocio: string;
  private  categoria_negocio: string;
  private  limite_entrega: number;
  private  valor_frete: number;

  private  nome_responsavel: string;
  private  sobrenome_responsavel: string;
  private  email: string;
  private  senha: string;
  private  formaPagamento: string;

  constructor(){


  }





  public setNomeNegocio(nome:string){
    this.nome_negocio = nome;
  }

   getNome_Vendedor(){
    return this.nome_negocio;
  }

   setEndereco(endereco: string){
    this.endereco_fixo = endereco;
  }

   getEndereco(){
    return this.endereco_fixo;
  }

   setLimiteEntrega(limite: number){
    this.limite_entrega = limite;
  }

   getLimiteEntrega(){
    return this.limite_entrega;
  }

   setTelefone(telefone : string){
    this.telefone_negocio = telefone;
  }

   getTelefone(){
    return this.telefone_negocio
  }

   setCategoria(categoria: string){
    this.categoria_negocio = categoria;
  }

   getCategoria(){
    return this.categoria_negocio;
  }

   setValorFrete(valor: number){
    this.valor_frete = valor;
  }

   getValorFrete(){
    return this.valor_frete;
  }

   setNomeDono(nome: string){
    this.nome_responsavel = nome;
  }

   getNomeDono(){
    return this.nome_responsavel;
  }

   setSobreNome(sobrenome: string){
    this.sobrenome_responsavel = sobrenome;
  }

   getSobreNome(){
    return this.sobrenome_responsavel;
  }

   setEmail(email: string){
    this.email = email;
  }

   getEmail(){
    return this.email;
  }

   setSenha(senha: string){
    this.senha = senha
  }

   getSenha(){
    return this.senha;
  }

   setFormaPagamento(forma_pagamento: string){
    this.formaPagamento = forma_pagamento;
  }

   getFormaPagamento(){
    return this.formaPagamento;
  }
}

@Injectable()
export class HomeInfo{
  private static nome_venda: string;
  private static endereco: string ;
  private static descricao: string;
  private static telefone: string;
  private static categoria: string;

  static setNome_Vendedor(nome:string){
    this.nome_venda = nome;
  }

  static getNome_Vendedor(){
    return this.nome_venda;
  }

  static setEndereco(endereco: string){
    this.endereco = endereco;
  }

  static getEndereco(){
    return this.endereco;
  }

  static setDescricao(descricao: string){
    this.descricao = descricao;
  }

  static getDescricao(){
    return this.descricao;
  }

  static setTelefone(telefone : string){
    this.telefone = telefone;
  }

  static getTelefone(){
    return this.telefone
  }

  static setCategoria(categoria: string){
    this.categoria = categoria;
  }

  static getCategoria(){
    return this.categoria;
  }

}
