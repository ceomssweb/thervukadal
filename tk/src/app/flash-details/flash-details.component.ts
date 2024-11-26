import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DetailsService } from '../services/UI/home-details/details.service';
import { Detail } from '../services/UI/home-details/details-enums';

@Component({
  selector: 'app-flash-details',
  templateUrl: './flash-details.component.html',
  styleUrls: ['./flash-details.component.scss'],
  providers: [DetailsService],
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule]
})
export class FlashDetailsComponent implements OnInit {
  details:any;

  responsiveOptions: any[] | undefined;
  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.details = [
      {id: 1, description: 'Apple'},
      {id: 2, description: 'Orange'},
      {id: 3, description: 'Veg'},
      {id: 4, description: 'Drinks'}
    ];
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
