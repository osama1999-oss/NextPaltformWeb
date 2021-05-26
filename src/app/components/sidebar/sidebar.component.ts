import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'equalizer', class: '' },
    { path: '/user-profile', title: 'New Creation',  icon:'add_circle_outline', class: '' },
    { path: '/table-list', title: 'Owners',  icon:'manage_accounts', class: '' },
    { path: '/typography', title: 'Blocked owners',  icon:'block', class: '' },
    { path: '/icons', title: 'Users',  icon:'person', class: '' },
    { path: '/maps', title: 'Current Reservation',  icon:'book-online', class: '' },
    { path: '/notifications', title: 'Play Grounds',  icon:'sports_soccer', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
