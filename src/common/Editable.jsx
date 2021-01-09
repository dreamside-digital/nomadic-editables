import React, { useState } from "react";
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useEditables } from './EditablesContext'
import addIcon from '../assets/add.svg'
import editIcon from '../assets/edit.svg'

const useStyles = createUseStyles({
  wrapper: props => ({
    border: '2px solid red',
    borderColor: props.isEditing ? 'red' : 'green'
  })
})

const ToggleEditingButton = ({toggleEditing}) => <button onClick={toggleEditing}><img src={editIcon} />Toggle editing</button>
const SaveButton = ({onSave}) => <button onClick={onSave}>Save</button>
const DeleteButton = ({onDelete}) => <button onClick={onDelete}>Delete</button>

const Editable = ({ children, content, Editor, EditorProps, onSave, onDelete, ...rest }) => {
  const [isEditing, setEditing] = useState(false)
  const [editingContent, setEditingContent] = useState(content)
  const classes = useStyles({ isEditing })
  const { showEditingControls } = useEditables()

  const toggleEditing = () => setEditing(!isEditing)

  const onContentChange = updatedContent => {
    setEditingContent(updatedContent)
  }

  const renderEditingButtons = () => {
    let editingButtons = [<SaveButton onSave={onSave} />, <DeleteButton onDelete={onDelete} />]
    if (isEditing) {
      return editingButtons
    }

    return null
  }

  if (showEditingControls) {
    return (
      <div className={classes.wrapper}>
        <ToggleEditingButton toggleEditing={toggleEditing} />
        { renderEditingButtons() }
        { isEditing ? (
          <Editor
            content={editingContent}
            onContentChange={onContentChange}
            classes={classes}
            EditorProps={EditorProps}
            { ...rest }
          />
        ) : (
          children
        )}
      </div>
    )
  }

  return children
}

export default Editable