import { UserComponent } from "./user/user.component";
import { AddUserComponent } from "./user/add-user.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";



const routes:Routes=[
    {path:'get-users',component:UserComponent},
    {path:'add-users',component:AddUserComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
