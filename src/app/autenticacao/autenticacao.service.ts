import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'https://api-labs.tindin.com.br/auth',
        {
          email: email,
          password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          let body = JSON.parse(JSON.stringify(res)).body;
          this.usuarioService.salvaToken(body.token);
        })
      );
  }
}
