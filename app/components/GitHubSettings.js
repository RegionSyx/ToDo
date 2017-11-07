import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { setToken, logout, loadToken } from '../actions/index';

let selectState = state => {
    return {
        token: state.github.token,
    };
};

let selectProps = { setToken, logout, loadToken };

export class GitHubSettings extends React.Component {
    constructor() {
        super();
        this.state = {
            token: "",
        };
    }

    componentWillMount() {
        this.props.loadToken();
    }

    render() {
        return (
            <Card style={{margin:"24px"}}>
                <CardTitle title="Authentication" />
                <CardText>
                    { this.props.token ? (
                    <TextField
                        floatingLabelText="API Key"
                        name="github_token"
                        disabled
                        fullWidth
                        value={this.props.token.replace(/.(?=.{6})/g, '*')}
                        onChange={e => this.setState({token: e.target.value})}
                    />
                    ) : (
                    <TextField
                        fullWidth
                        floatingLabelText="API Key"
                        name="github_token"
                        value={this.state.token}
                        onChange={e => this.setState({token: e.target.value})}
                    />
                    )}
                </CardText>
                <CardActions>
                    { this.props.token != null ? (
                        <FlatButton
                            secondary
                            label="Remove Token"
                            onClick={() => this.props.logout()}
                        />
                    ) : (
                        <FlatButton
                            primary
                            label="Set Token"
                            onClick={() => this.props.setToken(this.state.token)}
                        />
                    )}
                </CardActions>
            </Card>
        );
    }
}

export default connect(selectState, selectProps)(GitHubSettings);

