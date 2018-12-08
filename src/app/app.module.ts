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

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    CadastroPageModule,
    Cadastro2PageModule,
    HomePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    Cadastro2Page,
    HomePage,
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
