import React from 'react';
import { useSelector } from 'react-redux';
import Notification from './components/Notification';
import Blogs from './components/Blogs';
import LoginForm from './components/LoginForm';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Blog from './components/Blog';
import User from './components/User';

const App = () => {
    const user = useSelector(state => state.user);

    return (
        <div>
            <Notification />
            {
                user ?
                    <BrowserRouter>
                        <Navbar user={user} />
                        <Switch>
                            <Route exact path={['/', '/blogs']}>
                                <Blogs user={user} />
                            </Route>

                            <Route exact path='/users'>
                                <Users />
                            </Route>

                            <Route exact path='/blogs/:blogId' component={Blog} />

                            <Route exact path='/users/:userId' component={User} />
                        </Switch>
                    </BrowserRouter>
                    :
                    <LoginForm />
            }
        </div>
    );
};

export default App;