import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { College } from 'src/app/_Models/college.model';
import { CollegeService } from 'src/app/_services/college.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {
  collegeList:College[]=[];
  collegeObj:College=new College();
  collegeDetail!:FormGroup;
  constructor(private formBuilder:FormBuilder,private collegeService:CollegeService) { }

  ngOnInit(): void {
    // this.loadData();
    this.getAllColleges();
    this.collegeDetail=this.formBuilder.group({
      collegeRegId:[''],
      collegeName:[''],
      universityId:['']
      
    });
  }
  addCollege(){
    console.log(this.collegeDetail);
    this.collegeObj.collegeRegId=this.collegeDetail.value.collegeRegId;
    this.collegeObj.collegeName=this.collegeDetail.value.courseName;
    this.collegeObj.universityId=this.collegeDetail.value.eligibity;
    this.collegeService.addCollege(this.collegeObj).subscribe({
      next:(res:any)=>{
      console.log(res);
      this.getAllColleges();
    },
    error:err=>{
      console.log(err);
    }
    });

  }
  getAllColleges(){
    this.collegeService.getAllColleges().subscribe({
      next:(res:any)=>{
      this.collegeList=res;
      // console.log(res);
    },
    error:(err:any)=>{
      console.log("error while fetchind data");
    }
    });

  }
 editCollege(c:College){
    this.collegeDetail.controls['collegeRegId'].setValue(c.collegeRegId);
    this.collegeDetail.controls['collegeName'].setValue(c.collegeName);
    this.collegeDetail.controls['universityId'].setValue(c.universityId);
    
  }
  updateCollege(){
    this.collegeObj.collegeRegId=this.collegeDetail.value.collegeRegId;
    this.collegeObj.collegeName=this.collegeDetail.value.courseName;
    this.collegeObj.universityId=this.collegeDetail.value.eligibity;

    this.collegeService.updateCollege(this.collegeObj).subscribe({
      next:(res:any)=>{
      console.log(res);
      this.getAllColleges();
    },
    error:(err:any)=>{
      console.log(err);
    }
    });
  }
  
  deleteCollege(c:College){
    this.collegeService.deleteCollege(c).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('College deleted successfullly');
        this.getAllColleges();
    },
    error:(err:any)=>{
      console.log(err);
    }
  });
}
}
