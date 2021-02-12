import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../models/Car';

@Component({
  selector: 'app-user',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: Car;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate([this.car.id], {relativeTo: this.activatedRoute});
  }

  goToUser(): void {
    this.router.navigate([this.car.id], {relativeTo: this.activatedRoute, state: this.car});
  }
}
