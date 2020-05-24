import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticulosFamilias } from '../../models/articulosfamilias.collection';

@Component({
  selector: 'app-articulos-familia',
  templateUrl: './articulos-familia.component.html',
  styleUrls: ['./articulos-familia.component.css'],
})
export class ArticulosFamiliaComponent implements OnInit {
  fg: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      IdArticulosFamilia: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      Nombre: ['', [Validators.required]],
      CantidadStock: [
        '',
        [
          Validators.required,
          Validators.maxLength(6),
          Validators.pattern('[0-9]*$'),
        ],
      ],
    });
  }

  Guardar() {
    if (this.fg.valid) {
      console.log(
        `id:${this.fg.value.IdArticuloFamilia} nombre: ${this.fg.value.Nombre}`
      );
      ArticulosFamilias.push({
        IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia),
        Nombre: this.fg.value.Nombre,
      });
      console.log(ArticulosFamilias);
    } else {
      window.alert('Ingrese un valor');
    }
  }
  Limpiar() {
    this.fg.reset();
  }
}
