import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/UI/home-details/details.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  providers: [DetailsService],
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule]
})
export class TestimonialsComponent implements OnInit {

  details:any;

  responsiveOptions: any[] | undefined;
  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.showDetails().then((details) => {
      this.details = details
  });
  this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

 

  }

}
