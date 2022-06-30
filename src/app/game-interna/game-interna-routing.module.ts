import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInternaComponent } from './game-interna.component';

const routes: Routes = [{ path: '', component: GameInternaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameInternaRoutingModule { }
