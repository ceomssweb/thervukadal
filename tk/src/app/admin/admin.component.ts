import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  imports: [MainMenuComponent]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
