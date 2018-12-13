import { CarteiraPage } from './../pages/carteira/carteira';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ProdutoPage } from './../pages/produto/produto';
import { HomePageModule } from './../pages/home/home.module';
import { HomePage } from './../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { Cadastro2PageModule } from '../pages/cadastro2/cadastro2.module';
import { Cadastro2Page } from '../pages/cadastro2/cadastro2';
import { ProdutoPageModule } from '../pages/produto/produto.module';
import { EmailValidator } from '@angular/forms';

import{SocketIoModule, SocketIoConfig} from 'socket.io';
import { CarteiraPageModule } from '../pages/carteira/carteira.module';
  const config: SocketIoConfig = {url: 'http//localhost:3001', options: {}};

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    SocketIoConfig.forRoot(config),
    BrowserModule,
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

  private static nome_negocio: string;
  private static endereco_fixo: string;
  private static telefone_negocio: string;
  private static categoria_negocio: string;
  private static limite_entrega: number;
  private static valor_frete: number;

  private static nome_responsavel: string;
  private static sobrenome_responsavel: string;
  private static email: string;
  private static senha: string;
  private static formaPagamento: string;

  static setNomeNegocio(nome:string){
    this.nome_negocio = nome;
  }

  static getNome_Vendedor(){
    return this.nome_negocio;
  }

  static setEndereco(endereco: string){
    this.endereco_fixo = endereco;
  }

  static getEndereco(){
    return this.endereco_fixo;
  }

  static setLimiteEntrega(limite: number){
    this.limite_entrega = limite;
  }

  static getLimiteEntrega(){
    return this.limite_entrega;
  }

  static setTelefone(telefone : string){
    this.telefone_negocio = telefone;
  }

  static getTelefone(){
    return this.telefone_negocio
  }

  static setCategoria(categoria: string){
    this.categoria_negocio = categoria;
  }

  static getCategoria(){
    return this.categoria_negocio;
  }

  static setValorFrete(valor: number){
    this.valor_frete = valor;
  }

  static getValorFrete(){
    return this.valor_frete;
  }

  static setNomeDono(nome: string){
    this.nome_responsavel = nome;
  }

  static getNomeDono(){
    return this.nome_responsavel;
  }

  static setSobreNome(sobrenome: string){
    this.sobrenome_responsavel = sobrenome;
  }

  static getSobreNome(){
    return this.sobrenome_responsavel;
  }

  static setEmail(email: string){
    this.email = email;
  }

  static getEmail(){
    return this.email;
  }

  static setSenha(senha: string){
    this.senha = senha
  }

  static getSenha(){
    return this.senha;
  }

  static setFormaPagamento(forma_pagamento: string){
    this.formaPagamento = forma_pagamento;
  }

  static getFormaPagamento(){
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
