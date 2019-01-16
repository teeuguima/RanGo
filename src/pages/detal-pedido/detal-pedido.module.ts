import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalPedidoPage } from './detal-pedido';

@NgModule({
  declarations: [
    DetalPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalPedidoPage),
  ],
})
export class DetalPedidoPageModule {}
