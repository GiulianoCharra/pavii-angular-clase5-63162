import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ArticulosListaComponent } from './components/articulos-lista/articulos-lista.component';
import { ArticulosCargaComponent } from './components/articulos-carga/articulos-carga.component';
import { ArticulosFamiliasService } from './services/articulos-familias.service';
import { ArticulosFamiliaComponent } from './components/articulos-familia/articulos-familia.component';
import { ArticulosFamiliaListaComponent } from './components/articulos-familia-lista/articulos-familia-lista.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'listaarticulos/:id', component: ArticulosListaComponent },
      { path: 'listaarticulos', component: ArticulosFamiliaListaComponent },
      { path: 'cargaarticulos', component: ArticulosCargaComponent },
      { path: 'principal', component: PrincipalComponent },
    ]),
  ],
  declarations: [
    MenuComponent,
    PrincipalComponent,
    ArticulosComponent,
    ArticulosListaComponent,
    ArticulosCargaComponent,
    ArticulosFamiliaComponent,
    ArticulosFamiliaListaComponent,
  ],
  bootstrap: [PrincipalComponent],
  providers: [ArticulosFamiliasService],
})
export class AppModule {}
