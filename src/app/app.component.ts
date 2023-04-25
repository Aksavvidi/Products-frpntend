import { Component } from '@angular/core';
import { usersMenu, productsMenu } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products Frontend';
  name = 'Aksavvidi';
  usersMenu = usersMenu;
  productsMenu = productsMenu;

 
}
