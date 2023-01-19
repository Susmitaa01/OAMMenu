import { Branch } from "./branch.model";

export class Course {
    courseId?: number;
    courseName?: string;
    eligibity?: string;
    collegeRegId?:number;
    branches?: Branch[];
}
