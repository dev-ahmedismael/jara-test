import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infograph',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './infograph.component.html',
  styleUrl: './infograph.component.css'
})
export class InfographComponent{

}
