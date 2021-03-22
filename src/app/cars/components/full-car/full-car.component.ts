
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-full-car',
  templateUrl: './full-car.component.html',
  styleUrls: ['./full-car.component.css']
})
export class FullCarComponent {
  fullCar: Car;

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private router: Router
  ) {


    this.activatedRoute.params.subscribe(params => {
      this.fullCar = this.router.getCurrentNavigation().extras.state as Car;
    });
  }


}
