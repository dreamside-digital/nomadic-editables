import React from "react";
import PropTypes from "prop-types";
import BasicInput from 'common/BasicInput'

const NumberEditor = ({ content, onContentChange, classes, placeholder, ...rest }) => {

  const handleChange = event => {
    event.preventDefault()
    event.stopPropagation()
    onContentChange({
      ...content,
      number: event.currentTarget.value
    })
  }

  const number = Boolean(content) ? content.number : '';

  return (
    <BasicInput
      value={number}
      onChange={handleChange}
      placeholder={placeholder}
      autoFocus={true}
      type="number"
      {...rest}
    />
  );
}

NumberEditor.propTypes = {
  content: PropTypes.shape({ number: PropTypes.number }).isRequired,
  onContentChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  EditorProps: PropTypes.object,
}

NumberEditor.defaultProps = {
  content: { number: "" },
  onContentChange: updated => console.log('Implement a function to save content changes.', updated),
  classes: "",
  EditorProps: {}
}


export default NumberEditor;
