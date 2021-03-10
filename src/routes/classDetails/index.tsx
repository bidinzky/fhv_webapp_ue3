import { FunctionalComponent, h } from 'preact';
import { route} from 'preact-router';
import style from './style.css';

import {findClassById} from "../../model"
import ClassDetailGrid from "./classDetailGrid";
const ClassDetail: FunctionalComponent<{
    matches?: {
        id: string
    }
}> = (props) => {
    var c = findClassById(props.matches?.id);
    if(!props.matches?.id || c == undefined) {
        route("/notFound");
        return (<div></div>);
    }
    
    return (
        <div class={style.class_detail}>
            <h1>{c?.name}</h1>
            <h2>Description:</h2>
            <p>{c?.description}</p>
            <h2>Content of the Class:</h2>
            <p>{c?.content}</p>
            <h2>Points and Grades:</h2>
            <ClassDetailGrid tasks={c.tasks} grading={c.grading} studentGrades={c.students}></ClassDetailGrid>
        </div>
    );
};

export default ClassDetail;
