import React, { useState } from "react";
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
  errorMessage: {
    color: theme.colors.error
  },
  info: {
    fontFamily: theme.fontFamily,
    marginLeft: theme.spacing(2)
  }
}))

const defaultUploadFile = file => console.log('Implement a Promise to save file and return URL.', file)

const BasicFileInput = ({
  onChange,
  label,
  name,
  value,
  mimetypes,
  labelProps={},
  inputProps={},
  maxSize=(1024 * 1024 * 2), // 2MB
  uploadFile=defaultUploadFile,
  ...rest
}) => {
  const classes = useStyles()
  const [filename, setFilename] = useState()
  const [filepath, setFilepath] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const uniqueId = `${name}-${Date.now()}`

  const handleChange = async event => {
    setLoading(true)
    setError(null)
    setFilename(null)
    setFilepath(null)

    if (!event.target.files) {
      setLoading(false)
      setError(null)
      setFilename(null)
      setFilepath(null)
    }

    const file = event.target.files[0];
    console.log({ file })

    if (!file) {
      return setLoading(false)
    }

    if (file.size > maxSize) {
      setLoading(false)
      return setError(`Your file is too large. Please select a file less than ${parseInt(maxSize) / (1024*1024)}MB.`)
    }

    try {
      const filepath = await uploadFile(file)
      const filename = file.name

      console.log({filepath})
      console.log({filename})

      setFilename(filename)
      setFilepath(filepath)
      setLoading(false)
      onChange({ filepath, filename })
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <div className={classes.formField}>
      <div className={classes.inputWrapper}>
        <input
          name={name}
          id={uniqueId}
          className={classes.hiddenInput}
          type="file"
          accept={mimetypes}
          onChange={handleChange}
          value={value}
          autoFocus={true}
          {...inputProps}
          {...rest}
        />
        <label htmlFor={uniqueId} className={classes.labelButton}>
          {label}
        </label>
        { loading && <span className={classes.info}>loading...</span> }
        { filename && <span className={classes.info}><a href={filepath} target="_blank" rel="noreferrer noopener">{filename}</a></span> }
      </div>
      { error && <p className={classes.errorMessage}>{error}</p> }
    </div>
  )
}

export default BasicFileInput