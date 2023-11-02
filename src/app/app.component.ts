import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoangular';

  titulos: string[];

  constructor() {
    this.titulos = ['Busca de inplacable', 'Terminator', 'King the land'];
  }

  onAlertaPulsada($event: any) {
    console.log($event);
  }

}
