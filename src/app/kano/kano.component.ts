import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-kano',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './kano.component.html',
  styleUrl: './kano.component.css'
})
export class KanoComponent {

}
