import React from "react";
import PropTypes from "prop-types";
import BasicTextarea from 'common/BasicTextarea'

const TextAreaEditor = ({ content, onContentChange, placeholder, ...rest }) => {

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
    <BasicTextarea
      wrap="on"
      rows="4"
      value={text}
      onChange={handleChange}
      autoFocus={true}
      {...rest}
    />
  );
}

TextAreaEditor.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string
}

TextAreaEditor.defaultProps = {
  content: { text: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  classes: "",
  placeholder: ""
}

export default TextAreaEditor;
