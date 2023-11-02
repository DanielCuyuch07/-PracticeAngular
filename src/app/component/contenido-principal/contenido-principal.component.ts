import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent {
  @Input() title?: string;



}
