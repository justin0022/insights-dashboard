import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { KeyboardDatePicker } from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  datePicker: {
    float: 'right'
  }
}))

function DateRangePicker (props) {
  const {
    startDate: [startDate, setStartDate],
    endDate: [endDate, setEndDate]
  } = {
    startDate: useState(new Date()),
    endDate: useState(new Date()),
    ...(props.state || {})
  }

  const classes = useStyles()

  return (
    <Fragment>
      <Grid container className={classes.root} alignItems={'center'} justify={'flex-end'} spacing={1}>
        <Grid item xs={6} sm={3}>
          <KeyboardDatePicker
            clearable
            className={classes.datePicker}
            value={startDate}
            onChange={date => setStartDate(date)}
            format='yyyy-MM-dd'
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <KeyboardDatePicker
            clearable
            className={classes.datePicker}
            value={endDate}
            onChange={date => setEndDate(date)}
            format='yyyy-MM-dd'
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

DateRangePicker.propTypes = {
  state: PropTypes.shape({
    startDate: PropTypes.array,
    endDate: PropTypes.array
  })
}

export default DateRangePicker
