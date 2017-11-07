import React from 'react';
import { connect } from 'react-redux';
import githubActions, { fetchUser, fetchNotifications, loginSuccess} from '../actions';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TodoQuickAdd from './QuickAdd';

export class Home extends React.Component {
    componentWillMount() {
        this.props.fetchUser();
        this.props.fetchNotifications();
    }

    render() {
        let user = this.props.user;
        let notifications = _.sortBy(this.props.notifications, ['updated_at']);

        return <div>
            <TodoQuickAdd/>
            {this.props.todos.map((todo) =>
                <Card key={todo.title}>
                    <CardHeader
                        avatar="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_640.png"
                        title={todo.title}
                        subtitle="TODO"
                    />
                </Card>
            )}
            {this.props.notifications.map((notification) =>
                <Card key={notification.id}>
                    <CardHeader
                        avatar="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                        title={notification.subject.title}
                        subtitle={notification.subject.type}
                    />
                </Card>
            )}
        </div>
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

let selectProps = { fetchUser, fetchNotifications, loginSuccess }

export default connect(selectState, selectProps)(Home);

