import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Drawer } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import CodeIcon from '@material-ui/icons/Code'
import ErrorIcon from '@material-ui/icons/Error'
import BookIcon from '@material-ui/icons/Book'
import SearchIcon from '@material-ui/icons/Search'

import { SidebarNav } from './components'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}))

function Sidebar (props) {
  const { open, variant, onClose, className, ...rest } = props

  const classes = useStyles()

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'REST POC',
      href: '/rest',
      icon: <CodeIcon />
    },
    {
      title: 'GraphQL POC',
      href: '/graph',
      icon: <CodeIcon />
    },
    {
      title: 'Course',
      href: '/course',
      icon: <BookIcon />
    },
    {
      title: 'Tool Filter',
      href: '/toolfilter',
      icon: <SearchIcon />
    },
    {
      title: 'Not Found',
      href: '/settings',
      icon: <ErrorIcon />
    }
  ]

  return (
    <Drawer
      anchor='left'
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
}

export default Sidebar
