import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarService} from './services/car.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FullCarComponent} from './components/full-car/full-car.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';


@NgModule({
  declarations: [
    FullCarComponent,
    CarComponent,
    CarsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      // users
      {
        // path : users
        path: '', component: CarsComponent,
        children: [
          {
            path: ':id', component: FullCarComponent
          }
        ]
      }

    ])
  ],
  exports: [
    CarsComponent
  ],
  providers: [CarService]
})
export class CarModule {
}
