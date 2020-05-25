import { Component, OnInit } from "@angular/core";
import { ArticuloFamilia } from "../../models/articulofamilia";
import { ArticulosFamiliasService } from "../../services/articulos-familias.service";

@Component({
  selector: "app-articulos-familia-lista",
  templateUrl: "./articulos-familia-lista.component.html",
  styleUrls: ["./articulos-familia-lista.component.css"],
  providers: [ArticulosFamiliasService]
})
export class ArticulosFamiliaListaComponent implements OnInit {
  listaArticulos: ArticuloFamilia[];
  constructor(private articulosFamiliasService: ArticulosFamiliasService) {}

  ngOnInit(): void {
    this.listaArticulos = [];
    // this.listaArticulos = this.articulosFamiliasService.getArticulosFamilias();
    this.articulosFamiliasService.getArticulosFamilias().subscribe({
      next: articuloFamilias => (this.listaArticulos = articuloFamilias),
      error: err => window.alert(err.statusText)
    });
  }
}
