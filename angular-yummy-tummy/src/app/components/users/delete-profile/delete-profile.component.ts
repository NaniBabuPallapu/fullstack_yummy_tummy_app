import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { DebugService } from 'src/app/services/debug.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {

  fetchedUser!: User | null ;

  constructor(private debugService: DebugService, private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute, private authService : AuthService) {
    this.fetchedUser  = this.userService.getUser();

  }
  ngOnInit() {

    // const idFromRoute = this.activatedRoute.snapshot.paramMap.get('id');
    // const defaultId = 8;
    // const fetchedUserId = (idFromRoute !== null && !isNaN(Number(idFromRoute))) ? Number(idFromRoute) : defaultId;

      // this.fetchedUser  = this.userService.getUser();
      const fetchedUserId = Number(this.fetchedUser?.id);

    if (fetchedUserId !== null && fetchedUserId !== 0) {

      this.router.navigate(['/delete-user', fetchedUserId]);

      // fetching User basedOn Id
      this.userService.getUserById(fetchedUserId).pipe(

        catchError((error) => {
          console.log('Error fetching user:', error);
          return throwError('An Error Occured Whle fetching the user or User Not Found : '+fetchedUserId);
        })
      )
      .subscribe((data) => {
        this.fetchedUser = data;

        //deleting user profile
        if (confirm("Are you sure to delete this profile : " + this.fetchedUser?.firstName + " " + this.fetchedUser?.lastName)) {
          this.userService.deleteUserById(fetchedUserId).subscribe((data) => {

            console.log("Fetched User Deleted : "+fetchedUserId+": "+ this.fetchedUser?.firstName + " " + this.fetchedUser?.lastName);
            console.log("User Deleted : "+data);
          });
        }
      });
      this.authService.logOut();

    }



  }




}
