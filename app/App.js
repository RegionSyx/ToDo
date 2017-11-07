import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import githubActions from './actions';
import { fetchUser, fetchNotifications, loginSuccess, logout} from './actions';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas';
import GitHubLogin from 'react-github-login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from './components/Navigation';
import Home from './components/Home';
import GitHubSettings from './components/GitHubSettings';

const sagaMiddleware = createSagaMiddleware();


let store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

class App extends React.Component {
    render(state) {
        return (
                <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home/" component={Home} />
                    <Route exact path="/settings/github" component={GitHubSettings} />
                </Switch>
                </div>
        );
    }
}
let selectState = state => {
    return {
        token: state.github.token,
        user: state.github.user,
        notifications: state.github.notifications,
        todos: state.todo.todos,
    };
}
let selectProps = { fetchUser, fetchNotifications, loginSuccess, logout }

let ConnectedApp = withRouter(connect(selectState, selectProps)(App));

render (
    <Provider store={store}>
    <MuiThemeProvider>
    <BrowserRouter>
        <ConnectedApp />
    </BrowserRouter>
    </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);
