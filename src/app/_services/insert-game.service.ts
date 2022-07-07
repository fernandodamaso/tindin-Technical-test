import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { registerGame } from "../_models/registerGame";

@Injectable({
  providedIn: "root",
})
export class insertGameService {
  constructor(private http: HttpClient) {}

  insertGame(game: registerGame): Observable<Object> {
    return this.http.post<registerGame>("https://api-labs.tindin.com.br/games", game);
  }
}
