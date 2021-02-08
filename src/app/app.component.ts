import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'handle-APIS';

  user: any;

  constructor(
    private userSer: UserService,
    private toaster: ToastrService
    ) {}

  ngOnInit(): any {
    this.userSer.getUser().subscribe(
      (user: any) => {
        // console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        this.toaster.error(err.status, 'oops');
      }
    );
  }
  reload(): void {
    this.ngOnInit();
  }
}
