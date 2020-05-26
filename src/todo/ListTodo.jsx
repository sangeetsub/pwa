import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Typography, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function ListTodo(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      backgroundColor: "#F0F8FF",
    },
  }));

  const classes = useStyles();

  const { todos, deleteTodo } = props;
  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <React.Fragment>
              <Grid container justify="center" alignContent="center">
                <Grid item xs={10} sm={6} className={classes.listItem}>
                  <ListItem key={todo._id}>
                    <Typography>{todo.action}</Typography>
                  </ListItem>
                  <Divider />
                </Grid>

                <Grid item xs={1} sm={1}>
                  <Button
                    key={todo._id}
                    onClick={() => deleteTodo(todo._id)}
                    color="primary"
                    variant="outlined"
                  >
                    <DeleteIcon /> Delete
                  </Button>
                </Grid>
              </Grid>
              <br></br>
            </React.Fragment>
          );
        })
      ) : (
        <Paper>
          <ListItem> No Todo(s)</ListItem>
        </Paper>
      )}
    </div>
  );
}

export default ListTodo;
