import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, AutoFocusModule, InputTextModule],
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
          icon: 'pi pi-home',
          link: '/home'
      },
      {
        label: 'Courses',
        icon: 'pi pi-book',
        badge: '6',
        severity: 'warning',
        link: '/courses'
    },
    {
        label: 'Examinations',
        icon: 'pi pi-pencil',
        badge: '2',
        severity: 'success',
        link: '/examinations'
    },
      {
          label: 'Admin',
          icon: 'pi pi-server',
          link: '/admin'
      },
      {
          label: 'Search',
          icon: 'pi pi-search',
          link: '/search'
        //   items: [
        //       {
        //           label: 'Core',
        //           icon: 'pi pi-bolt',
        //           shortcut: '⌘+S'
        //       },
        //       {
        //           label: 'Blocks',
        //           icon: 'pi pi-server',
        //           shortcut: '⌘+B'
        //       },
        //       {
        //           label: 'UI Kit',
        //           icon: 'pi pi-pencil',
        //           shortcut: '⌘+U'
        //       },
        //       {
        //           separator: true
        //       },
        //       {
        //           label: 'Templates',
        //           icon: 'pi pi-palette',
        //           items: [
        //               {
        //                   label: 'Apollo',
        //                   icon: 'pi pi-palette',
        //                   badge: '2'
        //               },
        //               {
        //                   label: 'Ultima',
        //                   icon: 'pi pi-palette',
        //                   badge: '3'
        //               }
        //           ]
        //       }
        //   ]
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          link: '/contact'
      }
  ];
  }

}
