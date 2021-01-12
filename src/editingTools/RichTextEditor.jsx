import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import TextEditor, { createValueFromString } from 'react-rte';
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: theme.colors.dark,
    backgroundColor: theme.colors.inputBackground,
  }
}))

const RichTextEditor = ({ content, onContentChange, placeholder, ...rest }) => {
  const [editorValue, setEditorValue] = useState(null)
  const { text='' } = content
  const classes = useStyles()

  useEffect(() => {
    const editorValue = createValueFromString(text, 'html');
    setEditorValue(editorValue);
  }, [text])


  const onChange = editorValue => {
    setEditorValue(editorValue)
    const text = editorValue.toString('html')
    onContentChange({ ...content, text })
  }

  if (editorValue) {
    return (
      <div className={classes.input}>
        <TextEditor
          value={editorValue}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    )
  }

  return (<div />)
};

RichTextEditor.propTypes = {
  content: PropTypes.object.isRequired,
  onContentChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

RichTextEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  placeholder: ""
}

export default RichTextEditor;