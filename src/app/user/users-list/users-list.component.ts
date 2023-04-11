import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserAPIList } from '../user.interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}

  loading = false;

  ngOnInit(): void {
    console.log('Starting "findAll" API call');
    this.loading = true;
    this.userService.findAll().subscribe({
      next: (apiData: UserAPIList) => {
        const{status, data } = apiData;
        console.log(status, data);
      },
      error: (error) => {
        this.loading = false;
        console.log(error)
      },
      complete: () => {
        this.loading = false;
        console.log('API call completed')
      },
    })
  }

}
