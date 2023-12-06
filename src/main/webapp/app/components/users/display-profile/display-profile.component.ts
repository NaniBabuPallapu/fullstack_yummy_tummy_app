import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/main/webapp/app/interfaces/user';
import { DebugService } from 'src/main/webapp/app/services/debug.service';
import { UserService } from 'src/main/webapp/app/services/user.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {

  singleUser!: User | null;
  singleUserData$!: Observable<User>;
  allUsers!: User[];
  selectedId!: number;



  constructor(private userService: UserService, private debugService: DebugService, private activatedRoute: ActivatedRoute) {
    this.singleUser = this.userService.getUser();

  }

  ngOnInit() {
    this.debugService.info("display-profile component has been initialized");

    

    //// this.getUsers();
    // this.singleUser = this.userService.getUser();

    this.singleUserData$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(this.singleUser?.id);
        return this.userService.getUserById(this.selectedId);
      })
    );

    this.singleUserData$.subscribe((data) => {
      this.singleUser = data;
      console.log("fetched single user based on Id : " + JSON.stringify(this.singleUser));
    });

  }


  // getUsers() {
  //   this.userService.getAllUsers().subscribe((data) => {
  //     this.allUsers = data;
  //     console.log("fetching All Users: "+"\n "+ JSON.stringify(this.allUsers));
  //   })
  // }

}
