import { Component, OnInit } from '@angular/core';
import { registerGame } from '../_models/registerGame';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  title: string = '';
  genres = ['fight', 'RTS'];
  tag: string = '';
  platform: string = '';
  tags : string[] = [];
  platforms : string[] = [];
  photos = [{}];
  videos = [{}];
  mediumPrice!: number;
  releaseYear!: number;
  description: string = '';

  constructor() {}

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

  cadastrar() {
    let avaliacao = new registerGame();
    avaliacao.title = this.title;
    avaliacao.description = this.description;
    avaliacao.mediumPrice = this.mediumPrice;
    avaliacao.releaseYear = this.releaseYear;
    avaliacao.tags = this.tags;
    avaliacao.genres = this.genres;
    avaliacao.platforms = this.platforms;
    console.log(avaliacao);
  }
}
