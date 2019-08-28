import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Card } from '@material-ui/core'
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
  const [startDate, setDateStart] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const { loading, error, data } = useQuery(gql`${uniqueCourseToolUsage}`)
  if (error) {
    console.log(error)
  }

  const toolUseData = parseToolUse(data)
  console.log(toolUseData)

  const toolUseProp = {
    labelComponent: <VictoryTooltip />
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.inner}>
          <DateRangePicker
            state={
              { startDate: [startDate, setDateStart],
                endDate: [endDate, setEndDate]
              }} />
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
