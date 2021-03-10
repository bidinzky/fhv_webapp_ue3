import { FunctionalComponent, h } from 'preact';
import style from './style.css';

import {getGradeByPoints, Grade, StudentGrade, Task} from "../../../model"


function gridColumnStyle(i: number) {
    return {
        gridColumn: i
    }
}

function gridRowColumnStyle(i: number, j: number) {
    return {
        gridColumn: i,
        gridRow: j
    }
}

const ClassDetailGrid: FunctionalComponent<{
    tasks: Task[],
    studentGrades: StudentGrade[],
    grading: Grade[]
}> = (props) => {    
    return (
        <div class={style.class_detail_grid}>
            {props.tasks.map((t,i) => <div class={style.class_detail_grid_header} style={gridColumnStyle(i+2)}>{t.name}</div>)}
            <div class={style.class_detail_grid_header} style={gridColumnStyle(props.tasks.length+2)}>Summe</div>
            <div class={style.class_detail_grid_header} style={gridColumnStyle(props.tasks.length+3)}>Grade</div>
            {props.studentGrades.flatMap((s,i) => {
                let sum = s.points.reduce((sum, cur) => sum + cur, 0);
                let length = s.points.length;
                var values =  s.points.map((v,j) => <div style={gridRowColumnStyle(j+2,i+2)}>{v}</div>);
                var grade = getGradeByPoints(props.grading, sum);
                return [
                    <div class={style.class_detail_grid_header} style={gridRowColumnStyle(0,i+2)}>{s.id}</div>,
                    <div style={gridRowColumnStyle(length+2, i+2)}>{sum}</div>,
                    <div style={gridRowColumnStyle(length+3, i+2)}>{grade}</div>,
                    ...values
                ]
            })}
        </div>
    );
};

export default ClassDetailGrid;
