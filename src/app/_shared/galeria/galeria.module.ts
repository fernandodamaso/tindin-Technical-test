import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { LightgalleryModule } from 'lightgallery/angular';

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  exports :[
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    LightgalleryModule
  ]
})
export class GaleriaModule { }
