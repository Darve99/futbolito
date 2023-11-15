import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/services/jugador.service';
import { Jugador } from 'src/app/models/jugador.model';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.getJugadores();
  }

  getJugadores(): void {
    this.jugadorService.getJugadores()
      .subscribe(jugadores => this.jugadores = jugadores);
  }
}
