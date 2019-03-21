defmodule TaskTracker.Users.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :admin, :boolean, default: false, null: false
    field :email, :string, null: false
    field :password_hash, :string, null: false
    field :pw_tries, :integer, null: false, default: 0
    field :pw_last_try, :utc_datetime

    has_many :task, TaskTracker.Tasks.Task

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password_hash, :admin])
    |> unique_constraint(:email)
    |> validate_required([:email, :password_hash, :admin])
  end
end
