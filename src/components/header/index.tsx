import { FunctionalComponent, h } from 'preact';
import Match, { Link } from 'preact-router/match';
import style from './style.css';
import ImgUrl from "../../logo.png"

console.log(ImgUrl)
const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <img src={ImgUrl}></img>
            <nav>
                <a href="mailto:lukas.binder@students.fhv.at">Contact</a>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
            </nav>
        </header>
    );
};

export default Header;
