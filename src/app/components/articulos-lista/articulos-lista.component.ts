import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/articulofamilia';
import { ArticulosFamilias } from '../../models/articulosfamilias.collection';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css'],
})
export class ArticulosListaComponent implements OnInit {
  id: string;
  listaArticulos: ArticuloFamilia[];
  verGrilla = false;
  mensajeBoton = 'Mostrar Grilla Articulos';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listaArticulos = ArticulosFamilias;
    this.id = this.route.snapshot.paramMap.get('id');
  }

  MostrarOcultarGrilla() {
    this.mensajeBoton = this.verGrilla ? 'Mostrar grilla' : 'Ocultar';
    this.verGrilla = !this.verGrilla;
  }
}
