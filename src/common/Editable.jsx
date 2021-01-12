import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useEditables, makeStylesWithTheme } from 'common/EditablesContext'
import { ReactComponent as AddIcon } from 'assets/add.svg'
import { ReactComponent as EditIcon } from 'assets/edit.svg'
import { ReactComponent as CancelIcon } from 'assets/cancel.svg'
import { ReactComponent as SaveIcon } from 'assets/done.svg'
import { ReactComponent as DeleteIcon } from 'assets/delete.svg'
import IconButton from './IconButton'

const useStyles = makeStylesWithTheme(theme => ({
  wrapper: props => ({
    ...theme.editContainer,
    borderStyle: props.isEditing ? 'solid' : 'dashed'
  }),
  icon: props => ({
    ...theme.icon,
  }),
  actions: props => ({
    ...theme.actions
  })
}))

const ToggleEditingButton = ({ toggleEditing, isEditing }) => {
  const label = isEditing ? 'Cancel' : 'Edit'
  return (
    <IconButton onClick={toggleEditing} label={label}>
      { isEditing ? <CancelIcon /> : <EditIcon /> }
    </IconButton>
  )
}

const SaveButton = ({onSave}) => (
  <IconButton onClick={onSave} label="Save">
    <SaveIcon />
  </IconButton>
)
const DeleteButton = ({onDelete}) => <IconButton onClick={onDelete} label="Delete"><DeleteIcon /></IconButton>

const Editable = ({ children, content, Editor, onSave, onDelete, showChildren, ...rest }) => {
  const [isEditing, setEditing] = useState(false)
  const [editingContent, setEditingContent] = useState(content)
  const { showEditingControls, theme } = useEditables()
  const classes = useStyles({ isEditing, theme })

  const toggleEditing = () => setEditing(!isEditing)

  const onContentChange = updatedContent => {
    setEditingContent(updatedContent)
  }

  const handleSave = () => {
    onSave(editingContent)
    setEditing(false)
  }

  const handleDelete = () => {
    onDelete()
    setEditing(false)
  }

  if (showEditingControls) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.actions}>
          <ToggleEditingButton toggleEditing={toggleEditing} isEditing={isEditing} />
          { isEditing && <SaveButton onSave={handleSave} /> }
          { isEditing && <DeleteButton onDelete={handleDelete} /> }
        </div>
        { isEditing && (
          <Editor
            content={editingContent}
            onContentChange={onContentChange}
            classes={classes}
            { ...rest }
          />
        )}
        { (!isEditing || showChildren) && children }
      </div>
    )
  }

  return children
}

export default Editable