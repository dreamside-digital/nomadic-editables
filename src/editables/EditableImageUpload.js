import React from 'react'
import PropTypes from 'prop-types'

import Editable from "common/Editable";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  figure: {
    margin: 0
  },
  image: {
    height: 'auto',
    width: '100%'
  },
  caption: {
    fontStyle: 'italic',
    color: theme.colors.darkgrey
  }
}))

const EditableImageUpload = ({
  content,
  onSave,
  uploadFile,
  maxSize,
  imageProps,
  captionProps,
  ...rest
}) => {
  const classes = useStyles()
  const { filepath, filename, caption, title } = content;

  return (
    <Editable
      loader={() => import('editingTools/ImageUploadEditor')}
      onSave={onSave}
      uploadFile={uploadFile}
      content={content}
      mimetypes={'image/*'}
      { ...rest }
    >
      <figure className={classes.figure}>
        <img src={filepath} alt={title} className={classes.image} {...imageProps} />
        { caption && <figcaption className={classes.caption} {...captionProps}>{caption}</figcaption> }
      </figure>
    </Editable>
  );
};

EditableImageUpload.propTypes = {
  content: PropTypes.shape({ filepath: PropTypes.string, filename: PropTypes.string, caption: PropTypes.string, title: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  maxSize: PropTypes.number,
  imageProps: PropTypes.object,
  captionProps: PropTypes.object,
}

EditableImageUpload.defaultProps = {
  content: { filepath: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "", title: "" },
  onSave: content => console.log('Implement a function to save changes!', content),
  maxSize: 1024 * 1024 * 2, // 2MB
  imageProps: {},
  captionProps: {}
}

export default EditableImageUpload;