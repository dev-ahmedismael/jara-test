import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testmonials',
  standalone: true,
  imports: [NgOptimizedImage,CarouselModule],
  templateUrl: './testmonials.component.html',
  styleUrl: './testmonials.component.css'
})
export class TestmonialsComponent{
  
  @ViewChild('owlTestmonials') owlTestmonials!: CarouselComponent;

  testmonials: OwlOptions = {
    dots: false,
    nav: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl: true,
    autoplay: true,
    navSpeed: 1100,
    autoplayHoverPause: true,
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
      1200: {
        items: 3,
        margin: 30
      }
    }
  };

  nextCard() {
    this.owlTestmonials.next();
  }

  prevCard() {
    this.owlTestmonials.prev();
  }
}
