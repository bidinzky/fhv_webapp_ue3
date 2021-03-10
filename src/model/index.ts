import data from "./data.json";

export interface Grade {
    min: number;
    max: number;
    grade: number;
}

export interface Task {
    name: string;
    description?: string;
    maxPoints: number;
    pointsNeeded?: number;
}

export interface StudentGrade {
    id: number;
    points: number[];
}
export interface Class {
    name: string;
    id: string;
    semester: string;
    course: string;
    description: string;
    content: string;
    grading: Grade[];
    tasks: Task[];
    students: StudentGrade[];
}

export interface DataInterface {
    classes: Class[];
}

const Data: DataInterface = data;

export function findClassById(id: string | undefined): Class | undefined {
    if(id == null) {
        return undefined;
    }
    return Data.classes.find(v => v.id == id);
}

export function getGradeByPoints(grading: Grade[], points: number): number | undefined {
    return grading.find(v => points >= v.min && points <= v.max)?.grade;
}
export {Data};
export default Data;