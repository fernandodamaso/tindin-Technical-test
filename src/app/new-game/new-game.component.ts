import { Component, OnInit } from '@angular/core';
import { Photo, registerGame, Video } from '../_models/registerGame';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalPhotosComponent } from './modal-photos/modal-photos.component';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})

export class NewGameComponent implements OnInit {
  title: string = '';
  listaGenres = ["Fight", "Sports", "Survival", "Horror", "RPG", "Fps", "Tps", "Platform", "Adventure", "Action", "Minigame", "Racing", "Strategy", "Musical", "Dance", "Simulator"];
  listaPlatforms = ["PS", "PS2", "PS3", "PS4", "PS5", "PSP", "XBOX", "XBOX 360", "XBOX ONE", "XBOX SERIES S", "XBOX SERIES X", "SUPER NINTENDO", "NINTENDO 64", "NINTENDO SWITCH", "NINTENDO WII", "NINTENDO DS", "NINTENDO 3DS", "MEGA DRIVE", "PC", "MOBILE"];
  tag: string = '';
  platform: string = '';
  tags : string[] = [];
  platforms : string[] = [];
  genres : string[] = [];
  listPhotos: Photo[] = [];
  listVideos: Video[] = [];
  mediumPrice!: number;
  releaseYear!: number;
  description: string = '';

  // addOnBlur eseparatorKeysCodes referentes ao chips das tags
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  inserirTag(tag: string) {
    if (this.tag.length > 0) {
      this.tags.push(tag);
    }
    this.tag = '';
  }

  inserirPlatform(platform: string) {
    if (this.platform.length > 0) {
      this.platforms.push(platform);
    }
    this.platform = '';
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ModalPhotosComponent, {
      width: '250px',
      data: {name: "", url: ""},
    });

    dialogRef.afterClosed().subscribe(result => {
      let name = result.name;
      let url = result.name;
      let type = result.type;

      name = result.name;
      url = result.url;
      type = result.type;

      if(result.type == 'foto') {
        this.listPhotos.push(result);
      } else {
        this.listVideos.push(result);
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
  }

}
