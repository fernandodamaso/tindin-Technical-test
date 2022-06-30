import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameResult } from '../_models/game.model';

@Injectable({
  providedIn: 'root'
})
export class ListGamesService {

  constructor(private http: HttpClient) {}

  getGamesList() {
    return this.http.get<gameResult>('https://api-labs.tindin.com.br/games');
  }

}
