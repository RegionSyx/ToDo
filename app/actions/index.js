const actions = {
    FETCH_USER_REQUESTED: "FETCH_USER_REQUESTED",
    FETCH_USER_SUCCEEDED: "FETCH_USER_SUCCEEDED",
    FETCH_USER_FAILED: "FETCH_USER_FAILED",

    FETCH_REPOS_REQUESTED: "FETCH_REPOS_REQUESTED",
    FETCH_REPOS_SUCCEEDED: "FETCH_REPOS_SUCCEEDED",
    FETCH_REPOS_FAILED: "FETCH_REPOS_FAILED",

    FETCH_NOTIFICATIONS_REQUESTED: "FETCH_NOTIFICATIONS_REQUESTED",
    FETCH_NOTIFICATIONS_SUCCEEDED: "FETCH_NOTIFICATIONS_SUCCEEDED",
    FETCH_NOTIFICATIONS_FAILED: "FETCH_NOTIFICATIONS_FAILED",

    SET_TOKEN: "SET_TOKEN",
    LOAD_TOKEN_REQUESTED: "LOAD_TOKEN_REQUESTED",
    LOAD_TOKEN_SUCCEEDED: "LOAD_TOKEN_SUCCEEDED",

    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGOUT_SUCCEEDED: "LOGOUT_SUCCESS",
}

export function fetchUser() {
    return {
        type: actions.FETCH_USER_REQUESTED,
        payload: {}
    };
}

export function fetchRepos() {
    return {
        type: actions.FETCH_REPOS_REQUESTED,
        payload: {}
    };
}

export function fetchNotifications() {
    return {
        type: actions.FETCH_NOTIFICATIONS_REQUESTED,
        payload: {},
    };
}

export function loginSuccess(token) {
    return {
        type: actions.LOGIN_SUCCESS,
        payload: token,
    }
}

export function logout() {
    return {
        type: actions.LOGOUT_SUCCEEDED,
        payload: null,
    }
}

export function setToken(token) {
    return {
        type: actions.SET_TOKEN,
        payload: token
    };
}

export function loadToken() {
    return {
        type: actions.LOAD_TOKEN_REQUESTED,
        payload: {},
    };
}

export default actions;
