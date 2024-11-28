import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: true,
  imports: [MainMenuComponent]
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
