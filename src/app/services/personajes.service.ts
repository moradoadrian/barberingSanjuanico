import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Characteres, Personajes } from '../models/Characteres';
import { environment } from '../../environment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }
 getPersonajes(): Observable<Personajes[]> {
  return this.http.get<Characteres>(environment.apiUrl).pipe(
    delay(1000),
    tap((response) => console.log("Respuesta de la API:", response)),
    map((response) => response.results), 

    catchError((error: any) => {
      console.error("Error al obtener los personajes:", error);
      return of([]);
    })
  );
  }
}
