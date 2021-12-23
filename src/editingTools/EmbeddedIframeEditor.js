import React from "react"
import PropTypes from "prop-types"
import BasicInput from 'common/BasicInput'
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  wrapper: {
    padding: theme.spacing(3)
  },
  formField: {
    marginBottom: theme.spacing(3)
  }
}))

const EmbeddedIframeEditor = ({ content, onContentChange }) => {
  const classes = useStyles()
  const { src, title, height, width, embedCode } = content

  console.log("iframe editor content", content)

  const handleChange = id => event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      [id]: event.currentTarget.value
    })
  }

  const getIframeAttribute = (attr, string) => {
    const regex = ` ${attr}=["'](.*?)["']`
    const match = string.match(regex)
    if (match) {
      return match[1]
    } else {
      return ''
    }
  }

  const handleChangeEmbedCode = event => {
    const value = event.currentTarget.value

    const src = getIframeAttribute('src', value)
    const title = getIframeAttribute('title', value)
    const height = getIframeAttribute('height', value)
    const width = getIframeAttribute('width', value)

    onContentChange({
      ...content,
      embedCode: value,
      src,
      title,
      height,
      width
    })
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.formField}>
        <BasicInput
          name="iframe-embed-code"
          label="Iframe embed code"
          value={embedCode}
          onChange={handleChangeEmbedCode}
          autoFocus={true}
        />
      </div>

      <div className={classes.formField}>
        <BasicInput
          name="iframe-src"
          label="Iframe source URL"
          value={src}
          onChange={handleChange('src')}
          required
        />
      </div>

      <div className={classes.formField}>
        <BasicInput
          name="iframe-title"
          label="Title"
          value={title}
          onChange={handleChange('title')}
          required
        />
      </div>

      <div className={classes.formField}>
        <BasicInput
          name="iframe-height"
          label="Height (optional)"
          value={height}
          onChange={handleChange('height')}
        />
      </div>

      <div className={classes.formField}>
        <BasicInput
          name="iframe-width"
          label="Width (optional)"
          value={width}
          onChange={handleChange('width')}
        />
      </div>
    </div>
  );
}

EmbeddedIframeEditor.propTypes = {
  content: PropTypes.shape({ src: PropTypes.string, title: PropTypes.string, height: PropTypes.string, width: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
}

EmbeddedIframeEditor.defaultProps = {
  content: {},
  onContentChange: updated => console.log('Implement a function to save content changes.', updated)
}

export default EmbeddedIframeEditor;
