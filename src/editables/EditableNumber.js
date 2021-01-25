import React from "react";
import PropTypes from "prop-types";

import Editable from "../common/Editable";

const EditableNumber = ({ content, onSave, ...props }) => {
  const { number } = content;

  return (
    <Editable
      loader={() => import("editingTools/NumberEditor")}
      onSave={onSave}
      content={{ number: number }}
      {...props}
    >
      { number }
    </Editable>
  );
};

EditableNumber.propTypes = {
  content: PropTypes.shape({ number: PropTypes.number }).isRequired,
  onSave: PropTypes.func.isRequired,
  classes: PropTypes.string,
  EditorProps: PropTypes.object,
}

EditableNumber.defaultProps = {
  content: { number: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableNumber;
