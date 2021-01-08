import React, { useState } from "react";
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: props => ({
    border: '2px solid red',
    borderColor: props.isEditing ? 'red' : 'green'
  })
})

const Editable = ({ children }) => {
  const [isEditing, setEditing] = useState(false)
  const classes = useStyles({ isEditing })

  const toggleEditing = () => setEditing(!isEditing)

  return (
    <div className={classes.wrapper} onClick={toggleEditing}>
      { children }
    </div>
  )
}

export default Editable