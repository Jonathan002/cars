import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
