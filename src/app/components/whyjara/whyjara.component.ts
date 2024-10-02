import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whyjara',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './whyjara.component.html',
  styleUrl: './whyjara.component.css'
})
export class WhyjaraComponent {



  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }



}
