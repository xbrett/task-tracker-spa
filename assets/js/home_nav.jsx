// Home jsx
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(props) {
  let { session } = props;
  if (session) {
    return <div className="row my-2">
      <div className="col-9">
        <h1>Welcome to the Future: Task Tracker 3.0</h1>
      </div>
    </div>
  } else {
    return <div className="row my-2">
      <div className="col-9">
        <h1>Sign up to start tracking tasks</h1>
        <p><Link className="btn btn-primary btn-lg" to={"/register"}>Register</Link></p>
      </div>
    </div>
  }
}

export default connect((state) => { return { session: state.session }; })(Home);