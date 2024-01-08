import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-amphitheater',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './amphitheater.component.html',
  styleUrl: './amphitheater.component.css'
})
export class AmphitheaterComponent {

}
