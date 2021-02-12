import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/Car';

@Component({
  selector: 'app-users',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) {
  }

  // com did mount
  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value);
  }

}
