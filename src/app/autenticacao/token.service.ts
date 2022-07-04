import { Injectable } from '@angular/core';

// Chave para o nosso localstore.
const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  retornaToken() {
    // LocalStore pega a chave/token, caso não ache, retorna uma variavel em branco
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    // Recebe o token/string e seta o token que receber
    localStorage.setItem(KEY, token);
  }

  excluiToken() {
    // Deleta o token do localStore
    localStorage.removeItem(KEY);
  }

  possuiToken() {
    // Retorna um boleano do retornaToken, usando o !!
    return !!this.retornaToken();
  }

}
