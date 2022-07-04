import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MensagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
