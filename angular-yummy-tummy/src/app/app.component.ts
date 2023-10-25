import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  isAuthenticated : boolean = false;


  ngOnInit(){
    let storeAuth = localStorage.getItem('isAuthenticated');
    console.log("User Authentication : "+storeAuth);

    if(storeAuth !== null && storeAuth === "true"){
      this.isAuthenticated = true;
    } else{
      this.isAuthenticated = false;
    }
  }

}
