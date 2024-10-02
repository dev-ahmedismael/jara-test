import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent{

}
