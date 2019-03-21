import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import api from './api';

export default function Register(props) {

    return <div className="form-group">
    <div className="form-inline">
    <div>
        <input id="register-email" type="email" placeholder="email" />
    </div>
    <div>
        <input id="register-pass" type="password" placeholder="password" />
    </div>
    </div>
        <div><Link to={"/tasks"} className="btn btn-primary btn-lg"
            onClick={() => { api.create_user($('#register-email').val(), $('#register-pass').val()) }}>
            Register</Link></div>
    </div>
}