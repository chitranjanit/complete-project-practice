import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invied inputs",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invied age",
        message: "Age is grater than and equal to 1.",
      });
      return;
    }

    // Set up user
    props.onAddUser({
      id: new Date().getTime(),
      username,
      age,
    });

    setUsername("");
    setAge("");
  };

  const errorCloseHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClose={errorCloseHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* Add username */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
          />

          {/* add age */}
          <label htmlFor="age">Age ( Years )</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />

          {/* add submit */}
          <Button className={classes.submit} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
