import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home'
      },
      {
          label: 'Features',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Core',
                  icon: 'pi pi-bolt',
                  shortcut: '⌘+S'
              },
              {
                  label: 'Blocks',
                  icon: 'pi pi-server',
                  shortcut: '⌘+B'
              },
              {
                  label: 'UI Kit',
                  icon: 'pi pi-pencil',
                  shortcut: '⌘+U'
              },
              {
                  separator: true
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette',
                          badge: '2'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette',
                          badge: '3'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '3'
      }
  ];
  }

}