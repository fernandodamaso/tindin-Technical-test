import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { NewGameRoutingModule } from './new-game-routing.module';
import { NewGameComponent } from './new-game.component';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { ModalPhotosComponent } from './modal-photos/modal-photos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GaleriaModule } from '../_shared/galeria/galeria.module';

@NgModule({
  declarations: [
    NewGameComponent,
    ModalPhotosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatChipsModule,
    NewGameRoutingModule,
    MatDialogModule,
    GaleriaModule
  ]
})
export class NewGameModule { }
