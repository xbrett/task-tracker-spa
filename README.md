# TaskTracker
Task tracker is an app for keeping track of all those pesky things to do. Users
can register, sign-in/out, and assign tasks to any user in the system. Users can update
tasks and mark them complete as well as update the time spent up to the nearest
15-minutes. 

# Design Choices

* Register a user with an email and password
* Emails have to be unique -- notified with an alert, database enforced
* Users must be logged in to see tasks or other users
* Create tasks and enter title, description, time (hours and 15-min incr) and assignee
  * drop down for assignee and 15-min incr
* Any user can assign another user a task
* Any user can edit or delete a task
* Database uses two tables -- users and tasks
* Tasks contain foreign key from user table
* Title field is required when creating a task

# Running locally

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

