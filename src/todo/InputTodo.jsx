import React, { useState } from "react";
import axios from "axios";
import { Grid, Input, Button } from "@material-ui/core";

function InputTodo(props) {
  const [action, setAction] = useState("");

  const addTodo = () => {
    const task = { action: action };

    if (task.action && task.action.length > 0) {
      axios.post("http://localhost:8000/api/todos", task).then((res) => {
        if (res.data) {
          props.getTodos();
          setAction("");
        }
      });
    } else {
      console.log("input field required");
    }
  };

  return (
    <Grid container justify="center" alignContent="center" spacing={2}>
      <Grid item xs={11} sm={7}>
        <Input
          fullWidth
          type="text"
          onChange={(e) => setAction(e.target.value)}
          value={action}
        />
      </Grid>
      <Grid item xs={11} sm={7}>
        <Button color="primary" variant="outlined" onClick={addTodo}>
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputTodo;
