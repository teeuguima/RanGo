import { CarteiraPage } from './../carteira/carteira';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarteiraPage;


  constructor() {

  }
}
