import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/_Models/university.model';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { UniversityService } from 'src/app/_services/university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  universityList:University[]=[];
  universityObj:University=new University();
  universityDetail!:FormGroup;
  constructor(private formBuilder:FormBuilder,private universityService:UniversityService) { }

  ngOnInit(): void {
    // this.loadData();
    this.getAllUniversities();
    this.universityDetail=this.formBuilder.group({
      universityId:[''],
      name:[''],
      
    });
  }
  addUniversity(){
    console.log(this.universityDetail);
    this.universityObj.universityId=this.universityDetail.value.courseId;
    this.universityObj.name=this.universityDetail.value.courseName;
    this.universityService.addUniversity(this.universityObj).subscribe({
      next:(res:any)=>{
      console.log(res);
      this.getAllUniversities();
    },
    error:err=>{
      console.log(err);
    }
    });

  }

  editUniversity(u:University){
    this.universityDetail.controls['universityId'].setValue(u.universityId);
    this.universityDetail.controls['name'].setValue(u.name);
    
  }

  getAllUniversities(){
    this.universityService.getAllUniversities().subscribe({
      next:(res:any)=>{
      this.universityList=res;
      // console.log(res);
    },
    error:(err:any)=>{
      console.log("error while fetchind data");
    }
    });

  }

  updateUniversity(){
    this.universityObj.universityId=this.universityDetail.value.courseId;
    this.universityObj.name=this.universityDetail.value.courseName;
    this.universityService.updateUniversity(this.universityObj).subscribe({
      next:(res:any)=>{
      console.log(res);
      this.getAllUniversities();
    },
    error:(err:any)=>{
      console.log(err);
    }
    });
  }

  deleteUniversity(u:University){
    this.universityService.deleteUniversity(u).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('University deleted successfullly');
        this.getAllUniversities();
    },
    error:(err:any)=>{
      console.log(err);
    }
  });
}


}
