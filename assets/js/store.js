// Used Nat Tuck's Lecture Notes as Reference:
// http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/18-redux/notes.html
import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
Application  state layout:
    tasks: [],
    users: [],
    session: null,
    currTask: null
*/

// For each component of the state:
//  * Function with the same name
//  * Default is the default value of that component

function tasks(state = [], action) {
    switch (action.type) {
        case 'TASK_LIST':
            return action.data;
        default:
            return state;
    }
}

function users(state = [], action) {
    switch (action.type) {
        case 'USER_LIST':
            return action.data;
        default:
            return state;
    }
}

function session(state = null, action) {
    switch (action.type) {
        case 'NEW_SESSION':
            return action;
        case 'END_SESSION':
            return null;
        default:
            return state;
    }
}

function currTask(state = null, action) {
    switch (action.type) {
        case 'UPDATE_CURRENT_TASK':
            return action.data;
        default:
            return state;
    };
}

function root_reducer(state0, action) {
    let reducer = combineReducers({ tasks, users, session, currTask });
    let state1 = reducer(state0, action);

    return deepFreeze(state1);
}

let store = createStore(root_reducer);
export default store;