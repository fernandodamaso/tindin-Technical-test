import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vote } from '../_models/vote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class VoteGameService {
  constructor(private http: HttpClient) {}

  voteGame(vote: vote): Observable<Object> {
    return this.http.post<vote>('https://api-labs.tindin.com.br/games/rate', vote);
  }

}
