import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private url:string="http://localhost:8080/users";

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  public deleteUser(user:User){
    return this.http.delete(this.url+"/delete/"+ user.id)
    .pipe(catchError(this.errorHandler))
  }

  public addUser(user:User){
    return this.http.post(this.url+"/create",user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
  
}
