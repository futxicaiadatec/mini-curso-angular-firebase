import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  templateUrl: './nome-componente.component.html',
  styleUrls: ['./nome-componente.component.css']
})
export class NomeComponenteComponent implements OnInit {
  @Input() nomeAExibir: string; // alt+shift+f

  constructor() {}

  ngOnInit() {}
}
