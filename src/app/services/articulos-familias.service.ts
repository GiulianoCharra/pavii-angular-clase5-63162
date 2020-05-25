import { Injectable } from '@angular/core';
import { ArticuloFamilia } from '../models/articulofamilia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticulosFamiliasService {
  constructor(private http: HttpClient) {}

  getArticulosFamilias(): Observable<ArticuloFamilia[]> {
    return this.http.get<ArticuloFamilia[]>(
      'http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias'
    );
    /* return [
      { IdArticuloFamilia: 1, Nombre: 'Accesorios' },
      { IdArticuloFamilia: 2, Nombre: 'Audio' },
      { IdArticuloFamilia: 3, Nombre: 'Celulares' },
      { IdArticuloFamilia: 4, Nombre: 'Cuidado Personal' },
      { IdArticuloFamilia: 5, Nombre: 'Dvd' },
      { IdArticuloFamilia: 6, Nombre: 'Fotografia' },
      { IdArticuloFamilia: 7, Nombre: 'Frio-Calor' },
      { IdArticuloFamilia: 8, Nombre: 'Gps' },
      { IdArticuloFamilia: 9, Nombre: 'Informatica' },
      { IdArticuloFamilia: 10, Nombre: 'Lec - Lcd' },
    ]; */
  }
}
