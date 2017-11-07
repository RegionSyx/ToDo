import githubActions from '../actions';

const initialState = {
    token: null,
    user: {},
    repos: [],
    notifications: [],
}


const github = (state = initialState, action) => {
    switch(action.type) {
        case githubActions.LOAD_TOKEN_SUCCEEDED:
            var nextState = _.cloneDeep(state);
            nextState.token = action.payload;
            return nextState;
        case githubActions.LOGOUT_SUCCEEDED:
            return _.cloneDeep(initialState);
        case githubActions.SET_TOKEN:
            var nextState = _.cloneDeep(state);
            nextState.token = action.payload;
            return nextState;
        case githubActions.FETCH_USER_SUCCEEDED:
            var nextState = _.cloneDeep(state);
            nextState.user = action.payload;
            return nextState;
        case githubActions.FETCH_REPOS_SUCCEEDED:
            var nextState = _.cloneDeep(state);
            nextState.repos = _.reduce(action.payload, (result, repo) => {
                result.push(repo);
                return result;
            }, state.repos);
            nextState.repos = _.uniqBy(nextState.repos, 'id');
            return nextState;
        case githubActions.FETCH_NOTIFICATIONS_REQUESTED:
            var nextState = _.cloneDeep(state);
            nextState.notifications = [];
            return nextState;
        case githubActions.FETCH_NOTIFICATIONS_SUCCEEDED:
            var nextState = _.cloneDeep(state);
            nextState.notifications = _.reduce(action.payload, (result, notification) => {
                if (!_.find(result, ['id', notification.id])){
                    result.push(notification);
                }
                return result;
            }, state.notifications);
            return nextState;
        default:
            return state;
    }
}

export default github;
