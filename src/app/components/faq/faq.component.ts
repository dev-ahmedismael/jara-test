import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  ngAfterViewInit(): void {
    AOS.init();
    this.initializeFAQ();
  }

  initializeFAQ(): void {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
      question.addEventListener('click', (event) => {
        const active = document.querySelector('.question.active');
        if (active && active !== question) {
          active.classList.toggle('active');
          (active.nextElementSibling as HTMLElement).style.maxHeight = '0';
          (active.querySelector('span') as HTMLElement).style.transform = 'rotate(0deg)';
        }
        question.classList.toggle('active');
        const answer = question.nextElementSibling as HTMLElement;
        const icon = question.querySelector('span') as HTMLElement;
        if (question.classList.contains('active')) {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
          icon.style.transform = 'rotate(-90deg)';
        } else {
          answer.style.maxHeight = '0';
          icon.style.transform = 'rotate(0deg)';
        }
      });
    });
  }


  
}
