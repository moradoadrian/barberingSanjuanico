import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Personajes } from './models/Characteres';
import { PersonajesService } from './services/personajes.service';
import { AsyncPipe, JsonPipe } from '@angular/common'; //
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  personajes$: Observable<Personajes[]>;

  constructor(private personajesService: PersonajesService) { 
    this.personajes$ = this.personajesService.getPersonajes();
  }

}
