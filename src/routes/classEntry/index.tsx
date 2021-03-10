import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import {Class} from "../../model"


const ClassEntry: FunctionalComponent<{classData: Class}> = (props) => {
    return (
        <div class={style.class_entry}>
            <a href={`/class?id=${props.classData.id}`}>{props.classData.name}</a>
            <div>{props.classData.description}</div>
        </div>
    );
};

export default ClassEntry;
