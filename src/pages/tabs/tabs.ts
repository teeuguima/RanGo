import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CarteiraPage } from '../carteira/carteira';
import { PendentesPage } from '../pendentes/pendentes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PendentesPage;


  constructor() {

  }
}
