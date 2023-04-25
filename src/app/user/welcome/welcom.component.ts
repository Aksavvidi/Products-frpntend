import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit, OnDestroy {
  fullname$ = this.service.loggedInUserFullname$;
  fullname = '';
  subscription: Subscription | undefined;
  constructor(private service: AppService) {}

  ngOnInit(): void{
    this.subscription = this.fullname$.subscribe((fullname) => {
      this.fullname = this.fullname;
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
