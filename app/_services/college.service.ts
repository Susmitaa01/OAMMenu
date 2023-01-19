import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College } from '../_Models/college.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  addCollegeURL:string;
getCollegeURL:string;
updateCollegeURL:string;
deleteCollegeURL:string;
  getAllCourse: any;
  constructor(private http:HttpClient) {
  this.addCollegeURL="http://localhost:9091/api/colleges/addCollege";
  this.getCollegeURL="http://localhost:9091/api/colleges/getAllColleges";
  this.updateCollegeURL="http://localhost:9091/api/colleges/updateColleges";
  this.deleteCollegeURL="http://localhost:9091/api/colleges/deleteCollege";
   }
   addCollege(c:College):Observable<College>{
    return this.http.post<College>(this.addCollegeURL,c);
   }
  
  getAllColleges():Observable<College[]>{
    return this.http.get<College[]>(this.getCollegeURL);
  }
  updateCollege(c:College):Observable<College>{
    return this.http.put<College>(this.updateCollegeURL,c);
  }
  deleteCollege(c:College):Observable<College>{
    return this.http.delete<College>(this.deleteCollegeURL+'/'+c.collegeRegId);
  }
  
}
