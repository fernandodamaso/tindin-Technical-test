import { Component, OnInit, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { LightGallery } from "lightgallery/lightgallery";
import { galeriaModel } from "src/app/_models/galeria.model";

@Component({
  selector: "app-galeria",
  templateUrl: "./galeria.component.html",
  styleUrls: ["./galeria.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleriaComponent implements OnInit {
  @Input() galeriaData!: string;

  items: galeriaModel[] = [];

  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    closable: false,
    dynamic: true,
    dynamicEl: this.items,
    container: this._elementRef.nativeElement as HTMLElement,
    plugins: [lgZoom, lgThumbnail, lgVideo],
  };

  constructor(private _elementRef: ElementRef) {
    this._elementRef = _elementRef;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.galeriaData) {
      let galeriaObj = new galeriaModel();
      galeriaObj.src = this.galeriaData;

      this.items.push({
        src: galeriaObj.src,
        thumb: galeriaObj.src,
      });

      this.items.forEach((el) => {
        if (el.src === "vazio") {
          this.items.splice(0, 1);
        }
      });

      this.needRefresh = true;
      this.ngAfterViewChecked();
    }
  }

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh(this.items);
      this.lightGallery.openGallery();
      this.needRefresh = false;
    }
  }

  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
    detail.instance.openGallery();
  };

  openGallery = () => {
    this.lightGallery.openGallery();
  };
}
