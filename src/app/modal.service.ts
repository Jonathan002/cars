import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  data;
  show = false
  toggle(data?) {
    this.show = !this.show
    if (this.show && data) {
      this.data = data;
    } else {
      this.data = null;
    }
  }
}
