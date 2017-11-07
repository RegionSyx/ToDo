import actions from '../actions/todo';

const initialState = {
    todos: [
        { done: false, title: "Grocery Shopping" },
    ]
}


const github = (state = initialState, action) => {
    switch(action.type) {
        case actions.CREATE_TODO_SUCCEEDED:
            var newState = _.cloneDeep(state);
            newState.todos.push(action.payload);
            return newState;
        default:
            return state;
    }
}

export default github;
