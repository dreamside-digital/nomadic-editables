import React from "react";
import PropTypes from "prop-types";

import Editable from "../common/Editable";
import PlainTextEditor from "../editingTools/PlainTextEditor";


const EditableText = ({ content, onSave, ...props }) => {
  const { text } = content;

  return (
    <Editable
      Editor={PlainTextEditor}
      onSave={onSave}
      content={content}
      {...props}
    >
      { text }
    </Editable>
  );
};

EditableText.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  placeholder: PropTypes.string,
}

EditableText.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableText;
