import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuarioAutenticado: boolean = false;

  constructor(
    private AutenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  email = 'master@tindin.com.br';
  senha = '123';

  ngOnInit(): void {}

  login() {
    this.AutenticacaoService.autenticar(this.email, this.senha).subscribe({
      next: (data) => {
        this.usuarioAutenticado = true;
        this.router.navigate(['']);
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }
}
