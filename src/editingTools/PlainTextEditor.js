import React from "react";
import PropTypes from "prop-types";
import BasicInput from 'common/BasicInput'

const PlainTextEditor = ({ content, onContentChange, classes, EditorProps, placeholder }) => {

  const handleChange = event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      text: event.currentTarget.value
    })
  }

  const text = Boolean(content) ? content.text : '';

  return (
    <BasicInput
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      autoFocus={true}
      {...EditorProps}
    />
  );
}

PlainTextEditor.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
}

PlainTextEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated)
}

export default PlainTextEditor;
