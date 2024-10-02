import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policies-and-terms',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,NgOptimizedImage,RouterLink],
  templateUrl: './policies-and-terms.component.html',
  styleUrl: './policies-and-terms.component.css'
})
export class PoliciesAndTermsComponent {

}
