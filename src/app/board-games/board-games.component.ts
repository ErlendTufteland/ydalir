import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-board-games',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './board-games.component.html',
  styleUrl: './board-games.component.css'
})
export class BoardGamesComponent {

}
