import React, { useState } from "react";
import PropTypes from "prop-types";

import BasicFileInput from 'common/BasicFileInput'
import BasicInput from 'common/BasicInput'
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  fileUploadForm: {
    margin: theme.spacing(3)
  },
  formField: {
    marginBottom: theme.spacing(3)
  }
}))

const FileUploadEditor = ({
  content={},
  onContentChange,
  maxSize,
  uploadFile,
  mimetypes="application/*"
}) => {
  const classes = useStyles()

  const handleCaptionChange = event => {
    const caption = event.currentTarget.value;

    onContentChange({
      ...content,
      caption: caption
    })
  }

  const handleTitleChange = event => {
    const title = event.currentTarget.value;

    onContentChange({
      ...content,
      title: title
    })
  }

  const handleFileChange = ({ filename, filepath }) => {
    onContentChange({
      ...content,
      filepath,
      filename
    })
  }

  const { filepath, filename, title='' } = content;

  return (
    <div className={classes.fileUploadForm}>
      <div className={classes.formField}>
        <BasicFileInput
          label="Select file"
          mimetypes={mimetypes}
          onChange={handleFileChange}
          autoFocus={true}
          name="file-upload"
          maxSize={maxSize}
          uploadFile={uploadFile}
        />
      </div>
      <div className={classes.formField}>
        <BasicInput
          name="file-title"
          label="Title"
          value={title}
          onChange={handleTitleChange}
          autoFocus={false}
          helpText="The display title for the file, i.e. 'Infographic' instead of 'infographic-v2-final.pdf'"
        />
      </div>
    </div>
  );
}

FileUploadEditor.propTypes = {
  content: PropTypes.shape({
    filepath: PropTypes.string,
    filename: PropTypes.string,
    title: PropTypes.string
  }),
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object, caption: PropTypes.object, title: PropTypes.object }),
  uploadFile: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired
}

export default FileUploadEditor;
