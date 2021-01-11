import React from 'react'
import PropTypes from "prop-types";
import { makeStylesWithTheme } from 'common/EditablesContext'
import BasicInput from 'common/BasicInput'

const useStyles = makeStylesWithTheme(theme => ({
  wrapper: {
    padding: '0.4rem'
  },
  formField: {
    marginBottom: '0.4rem'
  }
}))

const LinkEditor = ({ content, onContentChange, EditorProps, editAnchorText }) => {
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
  EditorProps: PropTypes.shape({ anchor: PropTypes.object, link: PropTypes.object }),
  editAnchorText: PropTypes.bool,
}

LinkEditor.defaultProps = {
  content: { anchor: '', link: '' },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  editAnchorText: true,
  classes: "",
  EditorProps: { anchor: {}, link: {}},
}


export default LinkEditor;