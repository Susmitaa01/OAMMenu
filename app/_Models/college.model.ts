import { Branch } from "./branch.model";
import { Course } from "./course.model";

export class College {

    collegeRegId?: number;
    collegeName?: string;
    branchList?: Branch[];
    courseList?: Course[];
    universityId?: number;
    
}
