import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.scss'],
  standalone: true,
  imports: [MainMenuComponent]
})
export class ExaminationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
