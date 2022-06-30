import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../_models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GetGameService {

  constructor(private http: HttpClient) {}

  getGame(id: string) {
    return this.http.get<any>('https://api-labs.tindin.com.br/games/' + id);
  }

}
