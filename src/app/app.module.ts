import { CarteiraPage } from './../pages/carteira/carteira';
import { HomePageModule } from './../pages/home/home.module';
import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { Cadastro2PageModule } from '../pages/cadastro2/cadastro2.module';
import { Cadastro2Page } from '../pages/cadastro2/cadastro2';
import { ProdutoPageModule } from '../pages/produto/produto.module';
import { ProdutoPage } from './../pages/produto/produto';
import { CarteiraPageModule } from '../pages/carteira/carteira.module';
import {TabsPage} from '../pages/tabs/tabs';

import{SocketIoModule, SocketIoConfig} from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    CadastroPageModule,
    Cadastro2PageModule,
    HomePageModule,
    ProdutoPageModule,
    CarteiraPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    Cadastro2Page,
    HomePage,
    ProdutoPage,
    CarteiraPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {

}


@Injectable()
export class LoginInfo{
  private static email: string;
  private static senha: string;

  static setEmail(email: string){
    this.email = email;
  }

  static getEmail(){
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
