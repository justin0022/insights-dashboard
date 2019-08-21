import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Card, Container } from '@material-ui/core'
import { VictoryTooltip } from 'victory'

import { ChartCard, BarChart, DateRangePicker } from '../../components'
import { parseToolUse } from '../../services/caliper/parsers/aggregation'
import { uniqueCourseToolUsage } from '../../services/caliper/query'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  card: {
    flexGrow: 1,
    padding: theme.spacing(8)
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}))

const BarChartCard = ChartCard(BarChart)

function Course () {
  const classes = useStyles()
  const [dateStart, setDateStart] = useState(new Date())
  const [dateEnd, setDateEnd] = useState('')

  const { loading, error, data } = useQuery(gql`${uniqueCourseToolUsage}`)
  if (error) {
    console.log(error)
  }

  const toolUseData = parseToolUse(data)
  console.log(toolUseData)

  const toolUseProp = {
    labelComponent: <VictoryTooltip />
  }

  console.log(dateStart)

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.inner}>
<DateRangePicker />

        {/* <DatePicker
        label="Basic example"
        value={dateStart}
        onChange={setDateStart}
        animateYearScrolling
      /> */}

          <BarChartCard
            classes={classes}
            data={toolUseData}
            chartProp={
              toolUseProp
            }
            md={12}
            sm={6}
            loaded={!loading}
            title={'In how many unique courses is X tool being used?'} />
        </div>
      </Card>
    </div>
  )
}

export default Course
