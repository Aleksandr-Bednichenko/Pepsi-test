import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 250,
      "@media (min-width: 430px)": {
        width: 350,
      },
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First name*:" />
      <TextField id="standard-basic" label="Last name*:" />
    </div>
  );
}
