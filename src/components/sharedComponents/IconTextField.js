import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  margin: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  underline: {
    "&::before": {
      borderBottom: "1px solid #DCD7CE"
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #DCD7CE"
    },
    "&::after": {
      borderBottom: "2px solid #DCD7CE"
    }
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 30px #DCD7CE inset !important"
    }
  }
}));


export default function IconTextField({ icon, ...props }) {
  const classes = useStyles();
  return (
    <TextField
          {...props}
          className={clsx(classes.margin, classes.textField)}
          inputProps = { {className: clsx(classes.underline, classes.input)}}
          InputProps={{
            endAdornment: <InputAdornment position="end" style={{ color: "#65635F" }}>
            {icon}
          </InputAdornment>,
          }}
          fullWidth
          variant="outlined"
        />
  )
} 