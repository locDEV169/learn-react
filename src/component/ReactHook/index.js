import React, { Component } from 'react';
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import App from './App';
import ColorBox from './ColorBox';
import TodoList from './TodoList';
class index extends Component {
    render() {
        return (
            <App>
                <Route>
                    <Switch>
                    <Route path='/reactHook'/>
                    </Switch>
                </Route>
            </App>
        )
    }
}
export default withRouter(index) 