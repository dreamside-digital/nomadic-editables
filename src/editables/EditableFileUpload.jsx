import React from 'react'
import PropTypes from 'prop-types'

import Editable from "common/Editable";
import FileUploadEditor from 'editingTools/FileUploadEditor'
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  link: theme.link,
}))

const EditableFileUpload = ({
  content,
  onSave,
  uploadFile,
  maxSize,
  linkText,
  linkProps,
  ...rest
}) => {
  const classes = useStyles()
  const { filename, filepath, title } = content;

  return (
    <Editable
      Editor={FileUploadEditor}
      onSave={onSave}
      uploadFile={uploadFile}
      content={content}
      { ...rest }
    >
      <a href={filepath} target="_blank" rel="noopener noreferrer" {...linkProps}>
        { title || filename }
      </a>
    </Editable>
  );
};

EditableFileUpload.propTypes = {
  content: PropTypes.shape({
    filepath: PropTypes.string,
    filename: PropTypes.string,
    caption: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  maxSize: PropTypes.number,
  imageProps: PropTypes.object,
  captionProps: PropTypes.object,
}

EditableFileUpload.defaultProps = {
  content: { filepath: "https://www.nomadiclabs.ca/img/logo-03.png", filename: "logo-03.png", caption: "", title: "" },
  onSave: content => console.log('Implement a function to save changes!', content),
  maxSize: 1024 * 1024 * 2, // 2MB
  imageProps: {},
  captionProps: {}
}

export default EditableFileUpload;
