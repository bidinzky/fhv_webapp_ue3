import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import ClassList from '../routes/classList';
import NotFoundPage from '../routes/notfound';
import ClassDetails from "../routes/classDetails";
import Header from "../components/header";

const App: FunctionalComponent = () => {
    return (
        <div id="app">
            <Header />
            <Router>
                <ClassList path="/"></ClassList>
                <ClassDetails path="/class"></ClassDetails>
                <NotFoundPage default />
            </Router>
        </div>
    );
};
//<Route path="/profile/:user" component={ClassDetail} />
export default App;
