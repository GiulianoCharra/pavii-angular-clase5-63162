import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from "./components/menu/menu.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { ArticulosListaComponent } from "./components/articulos-lista/articulos-lista.component";
import { ArticulosCargaComponent } from "./components/articulos-carga/articulos-carga.component";
import { RouterModule } from "@angular/router";
import { ArticulosFamiliaComponent } from "./components/articulos-familia/articulos-familia.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { ArticulosFamiliasService } from "./services/articulos-familias.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "listaarticulos/:id", component: ArticulosListaComponent },
      { path: "listaarticulos", component: ArticulosListaComponent },
      { path: "cargaarticulos", component: ArticulosCargaComponent },
      { path: "principal", component: PrincipalComponent }
    ])
  ],
  declarations: [
    MenuComponent,
    PrincipalComponent,
    ArticulosListaComponent,
    ArticulosCargaComponent,
    ArticulosFamiliaComponent,
    ArticulosComponent
  ],
  bootstrap: [PrincipalComponent],
  providers: [ArticulosFamiliasService]
})
export class AppModule {}
