import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../_Models/api.response';
import { University } from '../_Models/university.model';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  addUniversityURL:string;
  getUniversityURL:string;
  updateUniversityURL:string;
  deleteUniversityURL:string;
  getAllUniversity: any;

   private _baseUrl:string="http://localhost:9091/api/university";

  constructor(private http:HttpClient) { 
    this.addUniversityURL="http://localhost:9091/api/university/addUniversity"; 
    this.getUniversityURL="http://localhost:9091/api/university/getAllUniversities";
    this.updateUniversityURL="http://localhost:9091/api/university/updateUniversity";
    this.deleteUniversityURL="http://localhost:9091/api/university/deleteUniversity";
  }
  getAllUniversities():Observable<University[]>{
    return this.http.get<University[]>(this.getUniversityURL);

  }
  addUniversity(u:University):Observable<any>{
    return this.http.post<University>(this.addUniversityURL,u);

  }
  updateUniversity(u:University):Observable<University>{
    return this.http.put<University>(this.updateUniversityURL,u);
    
    }
  
  deleteUniversity(u:University):Observable<University>{
      return this.http.delete<University>(this.deleteUniversityURL+'/'+u.universityId);
    }

}
