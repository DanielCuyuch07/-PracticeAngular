import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() message: string;
  @Input() subtitulo: string;

  // Son emisores de eventos (cogen el evento y lo emiten en el punto que nosotros queramos )
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() {
    this.message = 'Mensaje de la alerta por defecto '
    this.subtitulo = 'Valor del subtitulo';
    this.alertaPulsada = new EventEmitter;
  }

  onClick() {
    this.alertaPulsada.emit('La alerta ha sido pulsada')
  }

  ngOnInit(): void {

  }

}
