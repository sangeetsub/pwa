import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Fab from '@material-ui/core/Fab';
import { Card, Typography } from "@material-ui/core";

import ProgressBar from './Progressbar';
import { keys } from "@material-ui/core/styles/createBreakpoints";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 0, 1, 0),
    },
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [unitType, setUnitType] = useState("");
  const [maxLimit, setMaxLimit] = useState("male");

  const clearFields = () => {
          setName("");
          setMaxLimit("");
          setUnitType("");
  }

  const handleSubmit = () => {
  const progressItems = getProgressItems();
    let item = {
      name : name,
      unitType: unitType,
      completed: 0,
      maxLimit: maxLimit,
    }
  const toPush = {...progressItems, [name]: item}
  localStorage.setItem("progressItems", JSON.stringify(toPush));
  clearFields();
  };

  const getProgressItems = () => JSON.parse(localStorage.getItem("progressItems") || "{}");


  const trackBarsRender = () => {
    const allCompObj = getProgressItems();
    if(Object.keys(allCompObj).length == 0){
      return <div>No Items</div>
    } else {
  const allComp = [];
  Object.keys(allCompObj).forEach(key => {
    allComp.push(<ProgressBar progressItem={allCompObj[key.toString()]}/>)
  });
  return allComp;
    }
}

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={11} sm={8}>
          {trackBarsRender()}
        </Grid>
        <Grid item xs={11} sm={8}>
          <h2>
          Create Progress Bar
          </h2>
        </Grid>
        <Grid item xs={11} sm={7}>
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={11} sm={7}>
          <TextField
            fullWidth
            id="unitNae"
            label="Unit Name "
            variant="outlined"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
          />
        </Grid>
                <Grid item xs={11} sm={7}>
          <TextField
            fullWidth
            id="maxLimit"
            type="Number"
            label="Goal Amount"
            variant="outlined"
            value={maxLimit}
            onChange={(e) => setMaxLimit(e.target.value)}
          />
        </Grid>
        <Grid item xs={11} sm={7}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Grid>
        <Grid item xs={11} sm={7}>
          <Button
            onClick={() => {
              clearFields();
            }}
            color="secondary"
          >
            Clear
          </Button>

        </Grid>

        <Grid item xs={11} sm={7}>
          <p>&copy; Sangeet Subedi, 2020</p>
        </Grid>
      </Grid>
    </div>
  );
}
