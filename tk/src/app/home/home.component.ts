import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainMenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
