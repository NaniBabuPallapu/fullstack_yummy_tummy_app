import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { DebugService } from 'src/app/services/debug.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {

  singleUser: User = {} as User;
  singleUserData$!: Observable<User>;
  allUsers!: User[];
  selectedId!: number;



  constructor(private userService: UserService, private debugService: DebugService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.debugService.info("display-profile component has been initialized");
    this.getUsers();


    this.singleUserData$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.selectedId = (params.get('id')) !== null ? Number(params.get('id')) : 1;
        return this.userService.getUserById(this.selectedId);
      })
    );

    this.singleUserData$.subscribe((data) => {
      this.singleUser = data;
      console.log("fetched single user based on Id : " + JSON.stringify(this.singleUser));
    });

  }


  getUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data;
      console.log("fetching All Users: "+"\n "+ JSON.stringify(this.allUsers));
    })
  }

}
