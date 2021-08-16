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
    textAlign: 'left',
  },
  input: {
    padding: '0.25rem',
    borderRadius: '4px',
    border: `1px solid ${theme.colors.grey}`,
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: theme.colors.dark,
    backgroundColor: theme.colors.inputBackground,
    '&:focus': {
      border: `1px solid ${theme.colors.secondary}`,
    }
  },
  errorMessage: {
    color: theme.colors.error,
    fontFamily: theme.fontFamily,
    fontSize: '0.9em',
    margin: 0,
    marginBottom: '0.25rem',
  },
  helpText: {
    color: theme.colors.darkgrey,
    fontFamily: theme.fontFamily,
    fontSize: '0.9em',
    margin: 0,
    marginBottom: '0.25rem',
  },
}))

const BasicInput = ({
  onChange,
  label,
  name,
  placeholder,
  value='',
  type='text',
  labelProps={},
  inputProps={},
  required=false,
  helpText,
  error,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <div className={classes.inputWrapper}>
      {label && (
        <label className={classes.label} htmlFor={name} {...labelProps}>
          {label}
          {required ? ' *' : ''}
        </label>
      )}
      { helpText && <p className={classes.helpText}>{helpText}</p> }
      <input
        type={type}
        name={name}
        className={classes.input}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...inputProps}
        {...rest}
      />
      { error && <p className={classes.errorMessage}>{error}</p> }
    </div>
  )
}

export default BasicInput