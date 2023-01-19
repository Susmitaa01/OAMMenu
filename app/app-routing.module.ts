import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeListComponent } from './_Components/college-list/college-list.component';
import { HomePageComponent } from './_Components/home-page/home-page.component';
import { UniversityListComponent } from './_Components/university-list/university-list.component';

const routes: Routes = [
{path: '', redirectTo: 'homePage', pathMatch: 'full' },
{path:'homePage',component:HomePageComponent},
{path:'universityList',component:UniversityListComponent},
{path:'collegeList',component:CollegeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
