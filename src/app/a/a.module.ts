import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { APage } from './a.page';
import { ARoutingModule } from './a-routing.module'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARoutingModule
  ],
  declarations: [APage]
})
export class APageModule {}
