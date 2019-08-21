import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    
    padding: theme.spacing(2),
  },
  datePicker: {
    float: 'right'
  }
}));

function DateRangePicker(props) {
  const [startDate, handleStartDateChange] = useState(new Date());
  const [endDate, handleEndDateChange] = useState(new Date());
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.root} alignItems={'center'} justify={'flex-end'} spacing={1}>
        
        <Grid item xs={6} sm={3}>
          <KeyboardDatePicker
            clearable
            className={classes.datePicker}
            value={startDate}
            onChange={date => handleStartDateChange(date)}
            format="yyyy-MM-dd"
          />
        </ Grid>
        <Grid item xs={6} sm={3}>
          <KeyboardDatePicker
            clearable
            className={classes.datePicker}
            value={endDate}
            onChange={date => handleEndDateChange(date)}
            format="yyyy-MM-dd"
          />
        </ Grid>
      </Grid>
    </Fragment>
  );
}

export default DateRangePicker;