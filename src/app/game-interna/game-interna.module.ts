import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameInternaRoutingModule } from "./game-interna-routing.module";
import { GameInternaComponent } from "./game-interna.component";
import { LightgalleryModule } from "lightgallery/angular";
import { GaleriaGameInternaComponent } from './galeria-game-interna/galeria-game-interna.component';
import { GaleriaGameInternaModule } from './galeria-game-interna/galeria-game-interna.module';

@NgModule({
  declarations: [GameInternaComponent, GaleriaGameInternaComponent],
  imports: [CommonModule, GameInternaRoutingModule, LightgalleryModule, GaleriaGameInternaModule],
})
export class GameInternaModule {}
