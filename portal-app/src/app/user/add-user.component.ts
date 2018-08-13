import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit{
 errorMsg="";
    user;
    ngOnInit(){
      this.user =new User();
    }
  constructor(private userService:UserService) { }


    createUser():void {
        this.userService.addUser(this.user)
        .subscribe(data => {return alert("User created successfully"); },
                   error =>{return this.errorMsg=error.statusText,console.log(error)});
    }
    
  

}