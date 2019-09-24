import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss']
})
export class CarsViewComponent implements OnInit {
  cars = [];
  carSub;
  componentWorker;
  // imageApi = 'https://source.unsplash.com/random/';
  imageApi(idx) {
    return `https://source.unsplash.com/collection/${idx}/500x410`;
  }
  anchorText = `Open Home Modal - Outlet: 'ng-router-app-wide-modal'`;
  constructor(
    private car: CarService,
    public modal: ModalService,
  ) { }

  ngOnInit() {
    // this.componentWorker = new Worker('./../../car-sorter.worker', { type: 'module' })
    this.carSub = this.car.getCars().subscribe(async (cars) => {
      this.cars = this.sort(cars);
    });
  }

  private compareNumbers(a, b) {
    return a['Total Score'] - b['Total Score'];
  }

  private sort(arr) {
    const sorted = arr.sort(this.compareNumbers);
    this.car.carsSorted();
    return sorted;
  }

  ngOnDestroY() {
    this.carSub.unsubscribe();
  }

}
