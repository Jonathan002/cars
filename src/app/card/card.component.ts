import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() car;
  @Input() idx;
  
  imgLoaded = false;
  imgUrl;

  constructor(
    public modal: ModalService,
  ) {}

  ngOnInit() {
    // Load Image Programatically and assign it to property for dom to use once loaded to cache.
    const url = `https://source.unsplash.com/collection/${this.idx}/500x410`;
    const img = new Image();
    img.src = url;
    img.onload = () => {
      this.imgUrl = url;
    };
  }

}
