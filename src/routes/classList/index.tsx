import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import {Data} from '../../model'

import ClassEntry from '../classEntry';
const ClassList: FunctionalComponent = () => {
    return (
        <div class={style.class_list}>
            {
                Data.classes.map(c => <ClassEntry classData={c}></ClassEntry>)
            }
        </div>
    );
};
export default ClassList;
