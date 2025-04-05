import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CourseList from './components/courses/CourseList';
import CourseDetail from './components/courses/CourseDetail';
import AssignmentList from './components/assignments/AssignmentList';
import ResourceLibrary from './components/resources/ResourceLibrary';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/courses" component={CourseList} />
                <Route path="/courses/:id" component={CourseDetail} />
                <Route path="/assignments" component={AssignmentList} />
                <Route path="/resources" component={ResourceLibrary} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;