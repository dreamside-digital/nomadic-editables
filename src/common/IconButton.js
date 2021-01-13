import React from "react";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  button: {
    ...theme.button,
    height: "20px",
    width: "20px",
    padding: "2px",
    fontSize: "18px",
    borderRadius: '20px',
  }
}))

const IconButton = ({ onClick, label, children }) => {
  const classes = useStyles()

  return (
    <button className={classes.button} onClick={onClick} aria-label={label} title={label}>
      { children }
    </button>
  )
}

export default IconButton