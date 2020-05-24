import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [myBmr, setBmr] = useState(0);

  const handleSubmit = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      setBmr(bmr.toFixed(2));
    } else {
      bmr = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      setBmr(bmr.toFixed(2));
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={11} sm={8}>
          <h2>
            Please enter your info down below to calculate your calories lost
            per day.
          </h2>
        </Grid>
        <Grid item xs={11} sm={7}>
          <TextField
            fullWidth
            id="weight"
            type="Number"
            label="Weight (lbs)"
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Grid>
        <Grid item xs={11} sm={7}>
          <TextField
            fullWidth
            id="height"
            type="Number"
            label="Height (inches)"
            variant="outlined"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Grid>
        <Grid item xs={11} sm={7}>
          <TextField
            fullWidth
            id="age"
            type="Number"
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Grid>
        <Grid item xs={11} sm={7}>
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="Center"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Grid>
        <Grid item xs={11} sm={7}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Calculate
          </Button>
        </Grid>
        <Grid item xs={11} sm={7}>
          <Button
            onClick={() => {
              setAge("");
              setGender("male");
              setHeight("");
              setWeight("");
              setBmr(0);
            }}
            color="secondary"
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={11} sm={7}>
          <h2>{`You've lost : ${myBmr} calories today.`}</h2>
          <p>&copy; Sangeet Subedi, 2020</p>
        </Grid>
      </Grid>
    </div>
  );
}
