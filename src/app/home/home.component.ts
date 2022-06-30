import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/game.model';
import { ListGamesService } from '../_services/list-games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ListGamesService: ListGamesService) {}

  listaGames: Game[] = [];

  ngOnInit(): void {
    this.getGamesList();
  }

  getGamesList() {
    this.ListGamesService.getGamesList().subscribe({
      next: (data) => {
        // this.gamesResult = data;
        this.listaGames = data.games;
        console.log(this.listaGames)
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }

}
