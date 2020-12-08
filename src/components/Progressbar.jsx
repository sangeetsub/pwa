import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import {Card,Button,TextField} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel(props) {
    const {  name, unitName, completed, maxLimit} = props.progressItem;
    const [addCompleted, setAddCompleted] = useState(0);
  const classes = useStyles();


  const handleSubmit = () => {
      const progressItems = JSON.parse(localStorage.getItem("progressItems") || "{}");
    let item = {
      name : name,
      unitType: unitName,
      completed: Number(completed) + Number(addCompleted),
      maxLimit: maxLimit,
    }
  const toPush = {...progressItems, [name]: item}
  localStorage.setItem("progressItems", JSON.stringify(toPush));
  }


  return (
    <div className={classes.root}>
        <Card color="#">
  <Typography variant="h4">{name}</Typography>
 <LinearProgress variant="determinate" value={(completed/maxLimit) * 100} color="secondary" />
  <Typography> {completed} {unitName} Out of {maxLimit} done. ({Number(maxLimit) - Number(completed)} More to go)</Typography>
    <TextField
            fullWidth
            id="completed"
            label="Completed "
            variant="outlined"
            value={addCompleted}
            onChange={(e) => setAddCompleted(e.target.value)}
          />
           <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Card>
   <div style={{backgroundColor:"gray"}}><br></br></div>
    </div>
  );
}
