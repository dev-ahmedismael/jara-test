import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    Aos.init();
  }
}
