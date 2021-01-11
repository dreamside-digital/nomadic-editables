import React from 'react'
import PropTypes from 'prop-types'

import Editable from "common/Editable";
import ImageUploadEditor from 'editingTools/ImageUploadEditor'
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  image: {
    height: 'auto',
    width: '100%'
  }
}))

const EditableImageUpload = ({
  content,
  onSave,
  uploadImage,
  maxSize,
  imageProps={},
  captionProps={},
  ...rest
}) => {
  const classes = useStyles()
  const { imageSrc, caption, title } = content;

  return (
    <Editable
      Editor={ImageUploadEditor}
      handleSave={onSave}
      uploadImage={uploadImage}
      content={{ imageSrc: imageSrc, caption: caption, title: title }}
      { ...rest }
    >
      <img src={imageSrc} alt={title} className={classes.image} {...imageProps} />
      { caption && <small {...captionProps}>{caption}</small> }
    </Editable>
  );
};

EditableImageUpload.propTypes = {
  content: PropTypes.shape({ imageSrc: PropTypes.string, caption: PropTypes.string, title: PropTypes.string }).isRequired,
  onSave: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showCaption: PropTypes.bool,
  maxSize: PropTypes.number,
  styles: PropTypes.shape({ container: PropTypes.object, image: PropTypes.object }),
  classes: PropTypes.string,
  EditorProps: PropTypes.shape({ image: PropTypes.object, caption: PropTypes.object, title: PropTypes.object }),
}

EditableImageUpload.defaultProps = {
  content: { imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png", caption: "", title: "" },
  onSave: content => console.log('Implement a function to save changes!', content),
  showCaption: false,
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: { container: {}, image: {} },
  EditorProps: { image: {}, caption: {}, title: {} },
}

export default EditableImageUpload;