import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public modal: ModalService,
  ) { }

  ngOnInit() {
  }

}
