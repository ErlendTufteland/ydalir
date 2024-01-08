import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { OrderComponent } from './order/order.component';
import { ClothesComponent } from './clothes/clothes.component';
import { FoodComponent } from './food/food.component';
import { InformationComponent } from './information/information.component';
import { AmphitheaterComponent } from './amphitheater/amphitheater.component';
import { BoardGamesComponent } from './board-games/board-games.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { KanoComponent } from './kano/kano.component';

export const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'food', component: FoodComponent },
  { path: 'clothes', component: ClothesComponent },
  { path: 'information', component: InformationComponent },
  { path: 'ampitheater', component: AmphitheaterComponent },
  { path: 'boardgames', component: BoardGamesComponent },
  { path: 'shopingCart', component: ShopingCartComponent },
  { path: 'kano', component: KanoComponent },
  { path: '**', component: HomeComponent },
];
