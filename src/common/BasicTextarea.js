import React from "react";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontFamily: theme.fontFamily,
    fontWeight: 'bold',
    marginBottom: '0.25rem',
  },
  input: {
    padding: '0.25rem',
    borderRadius: '4px',
    border: `1px solid ${theme.colors.light}`,
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: theme.colors.dark,
    backgroundColor: 'rgba(255,255,255,0.8)',
  }
}))

const BasicTextarea = ({
  onChange,
  label,
  name,
  value,
  placeholder,
  type='text',
  labelProps={},
  inputProps={},
  ...rest
}) => {
  const classes = useStyles()

  return (
    <div className={classes.inputWrapper}>
      {label && <label className={classes.label} htmlFor={name} {...labelProps}>{label}</label>}
      <textarea
        name={name}
        className={classes.input}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoFocus={true}
        {...inputProps}
        {...rest}
      />
    </div>
  )
}

export default BasicTextarea