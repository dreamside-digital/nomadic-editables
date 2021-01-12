import React from "react";
import PropTypes from "prop-types";

import Editable from "common/Editable";
import RichTextEditor from 'editingTools/RichTextEditor'

const EditableParagraph = ({ content, onSave, ...rest}) => {
  const { text } = content;

  return (
    <Editable
      Editor={RichTextEditor}
      onSave={onSave}
      content={{ text: text }}
      { ...rest }
    >
      <div className={""} dangerouslySetInnerHTML={ {__html: text} } />
    </Editable>
  );
};

EditableParagraph.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
  placeholder: PropTypes.string,
}

EditableParagraph.defaultProps = {
  content: { text: 'Placeholder' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableParagraph;
