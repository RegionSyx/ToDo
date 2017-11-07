import { combineReducers } from 'redux';
import github from './github';
import todo from './todo';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({ github, todo, routing });
