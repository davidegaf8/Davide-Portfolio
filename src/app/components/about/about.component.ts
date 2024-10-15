import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  currentSlideIndex: number = 0;
  slides: any[] = [];

  constructor() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      this.updateSlides();
    });
  }

  ngOnInit(): void {
    this.updateSlides();
    this.startSlider();
  }

  updateSlides(): void {
    const images = this.windowWidth > 900
      ? [
          { image: './../../../assets/img/coding-cutted.jpg', delay: 0 },
          { image: './../../../assets/img/economics-cutted.jpg', delay: 7 },
          { image: './../../../assets/img/guitar-cutted.jpg', delay: 14 },
          { image: './../../../assets/img/studio-cutted.jpg', delay: 21 },
        ]
      : [
          { image: './../../../assets/img/coding.jpg', delay: 0 },
          { image: './../../../assets/img/economics.jpg', delay: 7 },
          { image: './../../../assets/img/guitar.jpg', delay: 14 },
          { image: './../../../assets/img/studio.jpg', delay: 21 },
        ];

    this.slides = images;
  }

  startSlider(): void {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }, 7000);
  }
}