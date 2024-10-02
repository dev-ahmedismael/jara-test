import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-topclients',
  standalone: true,
  imports: [NgOptimizedImage,CarouselModule],
  templateUrl: './topclients.component.html',
  styleUrl: './topclients.component.css'
})
export class TopclientsComponent{


  @ViewChild('owlTopClients') owlTopClients!: CarouselComponent;

  TopClients: OwlOptions = {
    dots: false,
    nav: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl: true,
    autoplay: true,
    navSpeed: 1100,
    autoplayHoverPause: false,
    autoplayTimeout: 7000,
    items: 1,
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      500: {
        items: 2,
        margin: 30
      },
      900: {
        items: 3,
        margin: 30
      },
      1240: {
        items: 4,
        margin: 30
      }
    }
  };

  nextCard() {
    this.owlTopClients.next();
  }

  prevCard() {
    this.owlTopClients.prev();
  }
}
