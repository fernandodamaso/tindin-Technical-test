import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../_models/game.model';
import { GetGameService } from '../_services/get-game.service';

@Component({
  selector: 'app-game-interna',
  templateUrl: './game-interna.component.html',
  styleUrls: ['./game-interna.component.scss'],
})
export class GameInternaComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private GetGameService: GetGameService) {}

  gameId: string = '';
  gameResult!: Game;
  gameDescription: string = '';


  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.params['id'];
    this.GetGameService.getGame(this.gameId).subscribe({
      next: (data) => {
        this.gameResult = data.game;
        console.log(this.gameResult)
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete gameResult'),
    })
  }
}
