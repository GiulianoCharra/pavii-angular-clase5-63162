import { Component, OnInit } from '@angular/core';
import { ArticulosListaComponent } from '../articulos-lista/articulos-lista.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  mensaje: string;
  materia = 'pavii';
  verMateria = true;
  logo = 'https://www.frc.utn.edu.ar/imagenes/logoutn.gif';
  colorParrafo = 'red';

  constructor() {}

  ngOnInit() {
    this.mensaje = 'Hola mundo desde Angular con interpolacion';
  }
}
