import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_BASE_URL } from 'src/app/constants/app.constants';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList! : User[];

  constructor(private httpClient : HttpClient, private userService : UserService){

  }

  ngOnInit(){

    this.getListOfUsers();
    console.log("List of users" + this.usersList);



  }

  getListOfUsers(){
    this.userService.getAllUsers().subscribe(data => this.usersList = data);
  }

}
