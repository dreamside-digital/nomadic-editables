import React from "react";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  inputWrapper: {
    position: 'relative',
    display: 'inline',
  },
  labelButton: {
    ...theme.button,
    fontFamily: theme.fontFamily,
  },
  hiddenInput: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    zIndex: '-1',
    '&:focus ~ $labelButton': {
      backgroundColor: theme.colors.light
    }
  },
}))

const BasicFileInput = ({
  onChange,
  label,
  name,
  value,
  error,
  filetypes,
  labelProps={},
  inputProps={},
  ...rest
}) => {
  const classes = useStyles()

  return (
    <div className={classes.inputWrapper}>
      <input
        name={name}
        className={classes.hiddenInput}
        type="file"
        accept={filetypes}
        onChange={onChange}
        value={value}
        autoFocus={true}
        {...inputProps}
        {...rest}
      />
      <label htmlFor={name} className={classes.labelButton}>
        {label}
      </label>
      { error && <p>{error}</p> }
    </div>
  )
}

export default BasicFileInput