import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-interna',
  templateUrl: './game-interna.component.html',
  styleUrls: ['./game-interna.component.scss'],
})
export class GameInternaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  gameId: string = '';

  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.params['id'];
    console.log(this.gameId);
  }
}
