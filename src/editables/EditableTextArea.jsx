import React from "react";
import PropTypes from "prop-types";

import Editable from "../common/Editable";
import TextAreaEditor from "../editingTools/TextAreaEditor";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  textarea: {
    whiteSpace: "pre-wrap"
  }
}))

const EditableTextArea = ({ content, onSave, ...props }) => {
  const { text } = content;
  const classes = useStyles()

  return (
    <Editable
      Editor={TextAreaEditor}
      onSave={onSave}
      content={content}
      {...props}
    >
      <span className={classes.textarea}>{ text }</span>
    </Editable>
  );
};

EditableTextArea.propTypes = {
  content: PropTypes.shape({ text: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  classes: PropTypes.string
}

EditableTextArea.defaultProps = {
  content: { text: '' },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EditableTextArea;
