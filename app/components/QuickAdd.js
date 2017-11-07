import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todo';
import TextField from 'material-ui/TextField';

export class TodoQuickAdd extends React.Component {
    constructor() {
        super();
        this.state = {value: ""}
    }

    handleKeyPress(event) {
        if (event.key == 'Enter') {
            this.props.createTodo(this.state.value);
            this.setState({value: ""});
        }
    };


    render() {
        return <TextField
                    name="TodoQuickAddValue"
                    placeholder="Quick Add..."
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    fullWidth={true}
                    onKeyPress={e => this.handleKeyPress(e)}
               />
    }
}

let select = state => {return {}}

export default connect(select, { createTodo })(TodoQuickAdd);
