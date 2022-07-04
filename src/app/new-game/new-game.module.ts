import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewGameRoutingModule } from './new-game-routing.module';
import { NewGameComponent } from './new-game.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewGameRoutingModule
  ]
})
export class NewGameModule { }
