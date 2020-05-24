import { Component, OnInit } from '@angular/core';
import { ArticulosFamilias } from '../../models/articulosfamilias.collection';
import { ArticuloFamilia } from '../../models/articulofamilia';
@Component({
  selector: 'app-articulo-familia-lista',
  templateUrl: './articulo-familia-lista.component.html',
  styleUrls: ['./articulo-familia-lista.component.css'],
})
export class ArticuloFamiliaListaComponent implements OnInit {
  listaArticulos: ArticuloFamilia[];
  constructor() {}

  ngOnInit(): void {
    this.listaArticulos = ArticulosFamilias;
  }
}
