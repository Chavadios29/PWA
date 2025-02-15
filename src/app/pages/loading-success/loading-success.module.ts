import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingSuccessPageRoutingModule } from './loading-success-routing.module';

import { LoadingSuccessPage } from './loading-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingSuccessPageRoutingModule
  ],
  declarations: [LoadingSuccessPage]
})
export class LoadingSuccessPageModule {}
