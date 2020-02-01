import axios from 'axios';

const initialState = {
    user: {
        id: 0,
        username: '',
        password: '',
        title: '',
        image: '',
        content: ''
    }
}

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user').then(response => response.data)
    }
}

export function login(history) {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login').then(response => {
            history.push('/');
            return response.data;
        })
    }
}

export function register(history) {
    return {
        type: REGISTER,
        payload: axios.post('/auth/register').then(response => {
            history.push('/');
            return response.data;
        })
    }
}

export function logout(history) {
    return {
        type: LOG_OUT,
        payload: axios.post('/auth/logout').then(() => history.push('/'))
    }
}

export function addPost(id) {
    return {
        type: ADD_POST,
        payload: axios.post(`/api/post/${id}`).then( response => response.data )
    };
}

export function getPost(id) {
    return {
        type: GET_POST,
        payload: axios.get(`/api/post/${id}`).then( response => response.data )
    };
}

export default function (state = initialState, action) {
    let {payload} = action;
    switch(action.type){
    case LOGIN + '_FULFILLED':
      return Object.assign({}, state, { username: payload.user, image: payload.image});

    case REGISTER + '_FULFILLED':
      return Object.assign({}, state, { username: payload.user, image: payload.image});

    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, { username: payload.user, image: payload.image});

    case ADD_POST + '_FULFILLED':
        return Object.assign({}, state, {title: payload.title, image: payload.image, content: payload.content});

    case GET_POST + '_FULFILLED':
        return Object.assign({}, state, {title: payload.title, image: payload.image, content: payload.content});
      
    case LOG_OUT + '_FULFILLED':
      return {
        username: '',
        password: ''
    };
        default: return state;
    }
}
