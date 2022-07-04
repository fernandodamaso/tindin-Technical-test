import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  // BehaviorSubject garante que toda vez que algum componente/servico faz um subscribe
  // nesse observable, o BehaviorSubject envia o ultimo dado que estava nele
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
    // Confere se já tem um token no localStorage, decodifica e manda pra frente o que esta no localStore.
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    // guarda no const usuario os dados decodificados do JWT dentro do modelo Usuario.
    const usuario = jwt_decode(token) as Usuario;
    // O next é um metodo do Subject. Manda para frente o Usuario decodificado.
    console.log(usuario)
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    // Faz questão de retornar o usuario como observable em vez de subject.
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    // uma vez que se tem um token novo, é preciso notificar todos os componentes do token novo, abaixo.
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
