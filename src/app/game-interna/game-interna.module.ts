import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameInternaRoutingModule } from './game-interna-routing.module';
import { GameInternaComponent } from './game-interna.component';


@NgModule({
  declarations: [
    GameInternaComponent
  ],
  imports: [
    CommonModule,
    GameInternaRoutingModule
  ]
})
export class GameInternaModule { }
