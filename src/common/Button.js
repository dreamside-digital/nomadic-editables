import React from "react";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  button: theme.button
}))

const Button = ({ onClick, label, children }) => {
  const classes = useStyles()

  return (
    <button className={classes.button} onClick={onClick} aria-label={label} title={label}>
      { children }
    </button>
  )
}

export default Button