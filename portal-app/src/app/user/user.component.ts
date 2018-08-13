import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  errorMsg="";
  users: User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
       return this.users = data;
      },
      error =>{return this.errorMsg=error.statusText, console.log(error);}
    );
  }
  deleteUser(user):void{
    this.userService.deleteUser(user)
      .subscribe(data => {return this.users = this.users.filter(u => u !== user)
      },
      error =>{return this.errorMsg=error.statusText, console.log(error);}
    );
  }
}
