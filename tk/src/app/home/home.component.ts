import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FlashDetailsComponent } from '../flash-details/flash-details.component';
import { LoginComponent } from "../login/login.component";
import { ExamNotificationsComponent } from "../exam-notifications/exam-notifications.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainMenuComponent, AnimateOnScrollModule, TestimonialsComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tittle="Thervu Kadal"

  constructor() { }

  ngOnInit() {
  }

}
