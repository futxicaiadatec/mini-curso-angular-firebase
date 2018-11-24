import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini curso';
  numero = 10;
  nome = 'João';
  nome2 = 'Maria';

  exibirAlerta() {
    alert(this.nome2);
    console.log(this.nome2);
  }
}
