// Task jsx
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import api from './api'

function TaskList(props) {

  let { tasks, session } = props;
  if (session) {
    let rows = _.map(tasks, (tt) => <Task key={tt.id} task={tt} />);
    return <div className="row">
      <div className="col-12">
        <br></br>
        <h2>List of Tasks:</h2>
        
        <table className="table table-primary table-hover table-striped">
          <thead>
            <tr>
              <th hidden={true}>ID</th>
              <th>Title</th>
              <th>Assignee</th>
              <th>Description</th>
              <th>Time (hours)</th>
              <th>Time (min)</th>
              <th>Completed</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <div><Link to={"/newtask"} className="btn btn-primary btn-lg">New Task</Link></div>
      </div>
    </div>;
  } else {
    return <div><h3>You Must Login To See Tasks!</h3></div>
  }
}

function Task(props) {
  let { task } = props;

  return <tr>
    <td>{task.title}</td>
    <td>{task.user_assigned}</td>
    <td>{task.desc}</td>
    <td>{task.time_hours}</td>
    <td>{task.time_minutes}</td>
    <td>{task.completed ? "yes" : "no"}</td>
    <td>
    <Link to={"/edittask"} className="btn btn-warning" onClick={() => { api.editTask(task.id) }} >Edit</Link>
    <Link to={"/tasks"} className="btn btn-danger" onClick={() => { api.deleteTask(task.id) }}>Delete</Link>
    </td>
  </tr>;
}

function state2props(state) {
  return {
    tasks: state.tasks,
    currTask: state.currTask,
    session: state.session
  };
}

export default connect(state2props)(TaskList);