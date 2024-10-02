import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-and-condetions',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,NgOptimizedImage,RouterLink],
  templateUrl: './terms-and-condetions.component.html',
  styleUrl: './terms-and-condetions.component.css'
})
export class TermsAndCondetionsComponent {

}
