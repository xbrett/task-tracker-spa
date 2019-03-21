import React from 'react';
import _ from 'lodash';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

function ShowTask(props) {

    let { currTask } = props;
    if (currTask) {
    return <div class="row">
    <div class="col-12">
      <ul class="list-group">

        <li class="list-group-item list-group-item-primary">
          <strong>Assignee: </strong>
          <a>{currTask.user_assigned}</a>
        </li>

        <li class="list-group-item list-group-item-primary">
          <strong>Title: </strong>
          <a>{currTask.title}</a>
        </li>
      
        <li class="list-group-item list-group-item-primary">
          <strong>Description: </strong>
          <a>{currTask.desc}</a>
        </li>

        <li class="list-group-item list-group-item-primary">
          <strong>Time: </strong>
          <a>{currTask.time_hours} hour(s) {currTask.time_minutes} min</a>
        </li>
      
        <li class="list-group-item list-group-item-primary">
          <strong>Completed: </strong>
          <a>{currTask.completed ? 'yes' : 'no'}</a>
        </li>
      </ul>
      <div>
        <Link to={"/tasks"} className="btn btn-primary btn-lg">back</Link>
      </div>
    </div>
    </div>;
    } else {
      <Redirect to={"/showtask"} />
      return <div></div>;
    }
}

export default connect((state) => { return { currTask: state.currTask }; })(ShowTask);