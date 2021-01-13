import React from 'react'
import PropTypes from "prop-types";
import { makeStylesWithTheme } from 'common/EditablesContext'
import BasicInput from 'common/BasicInput'

const useStyles = makeStylesWithTheme(theme => ({
  wrapper: {
    padding: theme.spacing(3)
  },
  formField: {
    marginBottom: theme.spacing(3)
  }
}))

const LinkEditor = ({ content, onContentChange, editAnchorText }) => {
  const classes = useStyles()

  const handleChange = id => event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      [id]: event.currentTarget.value
    })
  }

  const { anchor, link } = content;

  return (
    <div className={classes.wrapper}>

    {
      editAnchorText &&
      <div className={classes.formField}>
        <BasicInput
          name="link-text"
          label="Link text"
          value={ anchor }
          onChange={handleChange('anchor')}
        />
      </div>
    }
      <div className={classes.formField}>
        <BasicInput
          name="link-url"
          label="Link URL"
          value={ link }
          onChange={handleChange('link')}
        />
      </div>
    </div>
  )
};

LinkEditor.propTypes = {
  content: PropTypes.shape({ anchor: PropTypes.string, link: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  editAnchorText: PropTypes.bool,
}

LinkEditor.defaultProps = {
  content: { anchor: '', link: '' },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  editAnchorText: true,
  classes: "",
}


export default LinkEditor;