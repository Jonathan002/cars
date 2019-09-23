import { Component, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars';
  constructor(
    public modal: ModalService,
  ) {}
}
