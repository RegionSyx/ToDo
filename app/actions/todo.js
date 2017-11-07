const actions = {
    FETCH_TODOS_REQUESTED: "FETCH_TODOS_REQUESTED",
    FETCH_TODOS_SUCCEEDED: "FETCH_TODOS_SUCCEEDED",
    FETCH_TODOS_FAILED: "FETCH_TODOS_FAILED",

    CREATE_TODO_REQUESTED: "CREATE_TODO_REQUESTED",
    CREATE_TODO_SUCCEEDED: "CREATE_TODO_SUCCEEDED",
    CREATE_TODO_FAILED: "CREATE_TODO_FAILED",
}

export function createTodo(title) {
    return {
        type: actions.CREATE_TODO_SUCCEEDED,
        payload: {
            done: false,
            title,
        },
    }
}


export default actions;
