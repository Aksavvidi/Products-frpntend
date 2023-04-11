import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products Frontend';
  name = 'Aksavvidi';

  usersMenu: MenuItem[] = [
    {text: 'List of Users', link: 'not-implemented-yet'},
    {text: 'Insert a User', link: 'not-implemented-yet'},
    {text: 'Delete a User', link: 'not-implemented-yet'},
    {text: 'Update a User', link: 'not-implemented-yet'},

  ];
  productsMenu: MenuItem[] = [
    {text: 'List of Products', link: 'not-implemented-yet'},
    {text: 'Insert a Product', link: 'not-implemented-yet'},
    {text: 'Delete a Product', link: 'not-implemented-yet'},
    {text: 'Update a Product', link: 'not-implemented-yet'},

  ];
}
