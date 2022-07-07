import { Component, OnInit, ViewEncapsulation, ElementRef, EventEmitter, Output } from "@angular/core";
import { Photo, registerGame, Video } from "../_models/registerGame";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatDialog } from "@angular/material/dialog";
import { ModalPhotosComponent } from "./modal-photos/modal-photos.component";
import { galeriaModel } from "../_models/galeria.model";
import { insertGameService } from "../_services/insert-game.service";

@Component({
  selector: "app-new-game",
  templateUrl: "./new-game.component.html",
  styleUrls: ["./new-game.component.scss"],
})
export class NewGameComponent implements OnInit {
  @Output() enviaTitleOutput: EventEmitter<string> = new EventEmitter<string>();

  galeriaData: string = "";

  title: string = "";
  listaGenres = [
    "Fight",
    "Sports",
    "Survival",
    "Horror",
    "Rpg",
    "Fps",
    "Tps",
    "Platform",
    "Adventure",
    "Action",
    "Minigame",
    "Racing",
    "Strategy",
    "Musical",
    "Dance",
    "Simulator",
  ];
  listaPlatforms = [
    "Ps",
    "Ps2",
    "Ps3",
    "Ps4",
    "Ps5",
    "Psp",
    "Xbox",
    "Xbox 360",
    "Xbox One",
    "Xbox Series S",
    "Xbox Series X",
    "Super Nintendo",
    "Nintendo 64",
    "Nintendo Switch",
    "Nintendo Wii",
    "Nintendo Ds",
    "Nintendo 3ds",
    "Mega Drive",
    "Pc",
    "Mobile",
  ];
  tag: string = "";
  platform: string = "";
  tags: string[] = [];
  platforms: string[] = [];
  genres: string[] = [];
  listPhotos: Photo[] = [];
  listVideos: Video[] = [];
  mediumPrice!: number;
  releaseYear!: number;
  description: string = "";
  galeriaInput!: galeriaModel;

  // addOnBlur eseparatorKeysCodes referentes ao chips das tags
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(public dialog: MatDialog, private insertGameService: insertGameService) {}

  ngOnInit(): void {
    this.enviaTitleOutput.emit(this.galeriaData);
  }

  inserirPlatform(platform: string) {
    if (this.platform.length > 0) {
      this.platforms.push(platform);
    }
    this.platform = "";
  }

  // Referente as tags
  addTag(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  // Referente as tags
  inserirTag(tag: string) {
    if (this.tag.length > 0) {
      this.tags.push(tag);
    }
    this.tag = "";
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPhotosComponent, {
      width: "500px",
      data: { name: "", url: "" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      let url = result.url;
      let type = result.type;

      url = result.url;
      type = result.type;

      if (result.type == "foto") {
        this.listPhotos.push(result);
        this.galeriaInput = result;
        this.galeriaData = result.url;
        this.enviaTitleOutput.emit(this.galeriaData);
      } else {
        this.listVideos.push(result);
        this.galeriaInput = result;
        this.galeriaData = result.url;
        this.enviaTitleOutput.emit(this.galeriaData);
      }
    });
  }

  cadastrar() {
    let avaliacao = new registerGame();
    avaliacao.title = this.title;
    avaliacao.description = this.description;
    avaliacao.mediumPrice = this.mediumPrice;
    avaliacao.releaseYear = this.releaseYear;
    avaliacao.tags = this.tags;
    avaliacao.genres = this.genres;
    avaliacao.platforms = this.platforms;
    avaliacao.photos = this.listPhotos;
    avaliacao.videos = this.listVideos;
    console.log(avaliacao);

    this.insertGameService.insertGame(avaliacao).subscribe((data: any) => {
      console.log(data);
    });
  }
}
