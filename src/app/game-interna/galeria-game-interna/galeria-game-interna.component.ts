import { Component, OnInit, ViewEncapsulation, ElementRef, Input } from "@angular/core";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { LightGallery } from "lightgallery/lightgallery";
import { Photo } from "src/app/_models/registerGame";
import { galeriaModel } from "src/app/_models/galeria.model";

@Component({
  selector: "app-galeria-game-interna",
  templateUrl: "./galeria-game-interna.component.html",
  styleUrls: ["./galeria-game-interna.component.scss"],
})
export class GaleriaGameInternaComponent {
  @Input() resultPhotos!: any[];

  constructor(private _elementRef: ElementRef) {
    this._elementRef = _elementRef;
  }

  private lightGallery!: LightGallery;
  private needRefresh = false;

  galeriaListaFotos: galeriaModel[] = [];

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh(this.galeriaListaFotos);
      this.lightGallery.openGallery();
      this.needRefresh = false;
    }
  }

  ngOnChanges(): void {
    if (this.resultPhotos) {
      for (let i = 0; i < this.resultPhotos.length; i++) {
        let el = {
          src: this.resultPhotos[i].url,
          thumb: this.resultPhotos[i].url,
        };
        this.galeriaListaFotos.push(el);
      }
    }
  }

  settings = {
    counter: false,
    dynamic: true,
    closable: false,
    dynamicEl: this.galeriaListaFotos,
    container: this._elementRef.nativeElement as HTMLElement,
    plugins: [lgZoom, lgThumbnail],
  };

  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
    detail.instance.openGallery();
  };

  openGallery = () => {
    this.lightGallery.openGallery();
  };
}
