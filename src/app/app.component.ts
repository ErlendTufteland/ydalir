import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { InformationComponent } from './information/information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, TabMenuModule, BadgeModule, DividerModule, InformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ydalir';

  items = [
            {
                label: '<span class="material-symbols-outlined mr-1">home</span><span>Ydalir</span>',
                routerLink: '/home'
            },
            {
                label: ' <span class="material-symbols-outlined mr-1">hotel</span>Booking',
                routerLink: '/booking'
            },
            {
                label: '<span class="material-symbols-outlined mr-1">restaurant</span>Mat',
                routerLink: '/food'
            },
            {
                label: ' <span class="material-symbols-outlined mr-1">apparel</span>Klær',
                routerLink: '/clothes'
            },
            {
                label: '<span class="material-symbols-outlined mr-1">theater_comedy</span>Tribune',
                routerLink: '/ampitheater'
            },
            {
                label: ' <span class="material-symbols-outlined mr-1">playing_cards</span>Board games',
                routerLink: '/boardgames'
            },
            {
                label: '<span class="material-symbols-outlined mr-1">kayaking</span>Kano',
                routerLink: '/kano'
            },
            {
                label: ' <span class="material-symbols-outlined mr-1">forest</span>Klatrepark',
                routerLink: '/ropesCourse'
            },
            {
                label: ' <span class="material-symbols-outlined mr-1">shopping_cart</span>',
                routerLink: '/ropesCourse'
            }
        ];

}
