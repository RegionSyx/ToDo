import { call, put, apply, takeEvery } from 'redux-saga/effects';
import githubActions from './actions';
import axios from 'axios';
import parseLinkHeader from 'parse-link-header';

function get_api() {
    return axios.create({
        baseURL: 'https://api.github.com',
        headers: {'Authorization': `token ${localStorage.getItem('github_token')}`},
    });
}

export function* fetchUser(action) {
    let github = yield call(get_api);
    let result = yield call(github.get, '/user');
    yield put({type: githubActions.FETCH_USER_SUCCEEDED, payload: result.data});
}

function* fetchRepos(action) {
    let github = yield call(get_api);
    var url = '/user/repos';
    while(url) {
        let result = yield call(github.get, url);
        yield put({type: githubActions.FETCH_REPOS_SUCCEEDED, payload: result.data});
        url = _.get(parseLinkHeader(result.headers["link"]), 'next.url');
    }
}

function* fetchNotifications(action) {
    let github = yield call(get_api);
    var url = '/notifications?participating=true';
    while(url) {
        let result = yield call(github.get, url);
        yield put({type: githubActions.FETCH_NOTIFICATIONS_SUCCEEDED, payload: result.data});
        url = _.get(parseLinkHeader(result.headers["link"]), 'next.url');
    }
}

function* loadToken(action) {
    let token = yield call([localStorage, 'getItem'], 'github_token');
    if (token != null) {
        yield put({type: githubActions.LOAD_TOKEN_SUCCEEDED, payload: token});
    }
}

function* setToken(action) {
    yield call([localStorage, 'setItem'], 'github_token', action.payload);
}

function* logout(action) {
    yield call([localStorage, 'removeItem'], 'github_token');
}

export default function* sagas() {
    yield takeEvery(githubActions.LOAD_TOKEN_REQUESTED, loadToken);
    yield takeEvery(githubActions.SET_TOKEN, setToken);
    yield takeEvery(githubActions.LOGOUT_SUCCEEDED, logout);
    yield takeEvery(githubActions.FETCH_USER_REQUESTED, fetchUser);
    yield takeEvery(githubActions.FETCH_REPOS_REQUESTED, fetchRepos);
    yield takeEvery(githubActions.FETCH_NOTIFICATIONS_REQUESTED, fetchNotifications);
}
