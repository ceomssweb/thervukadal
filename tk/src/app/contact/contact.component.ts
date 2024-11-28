import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [MainMenuComponent]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
