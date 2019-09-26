import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../car.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss']
})
export class CarsViewComponent implements OnInit, OnDestroy {
  cars = [];
  carSub;
  
  constructor(
    private car: CarService,
    public modal: ModalService,
  ) { }

  ngOnInit() {
    this.carSub = this.car.getCars().subscribe(async (cars) => {
      this.cars = this.sort(cars);
    });
  }

  private compareTotalScore(a, b) {
    return b['Total Score'] - a['Total Score'];
  }

  private sort(arr) {
    const sorted = arr.sort(this.compareTotalScore)
                      .filter(x => x['Cool Factor'] > 6)
                      .splice(0, 10);
    console.log('log sorted', sorted);
    this.car.carsSorted();
    return sorted;
  }

  ngOnDestroy() {
    this.carSub.unsubscribe();
  }

}
