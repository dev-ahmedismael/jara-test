import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit ,AfterViewInit{
  title = 'jara';

  ngOnInit() {
    AOS.init({
      duration: 800,
    });
  }
  ngAfterViewInit() {
    AOS.refresh();
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onActive() {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }

 
}
