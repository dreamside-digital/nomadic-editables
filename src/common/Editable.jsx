import React, { useState } from "react";
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'
import { useEditables } from './EditablesContext'
import { ReactComponent as AddIcon } from '../assets/add.svg'
import { ReactComponent as EditIcon } from '../assets/edit.svg'
import { ReactComponent as CancelIcon } from '../assets/cancel.svg'
import { ReactComponent as SaveIcon } from '../assets/done.svg'
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

const useStyles = createUseStyles({
  wrapper: props => ({
    ...props.theme.editContainer,
  }),
  button: props => ({
    ...props.theme.button,
    fontFamily: props.theme.fontFamily,
  }),
  icon: props => ({
    ...props.theme.icon,
  }),
  actions: props => ({
    ...props.theme.actions
  })
})

const Button = ({ onClick, label, children }) => {
  const { theme } = useEditables()
  const classes = useStyles({ theme })
  return (
    <button className={classes.button} onClick={onClick} aria-label={label} title={label} key={label}>
      { children }
    </button>
  )
}

const ToggleEditingButton = ({ toggleEditing, isEditing }) => {
  const label = isEditing ? 'Cancel' : 'Edit'
  return (
    <Button onClick={toggleEditing} label={label}>
      { isEditing ? <CancelIcon /> : <EditIcon /> }
    </Button>
  )
}

const SaveButton = ({onSave}) => (
  <Button onClick={onSave} label="Save">
    <SaveIcon />
  </Button>
)
const DeleteButton = ({onDelete}) => <Button onClick={onDelete} label="Delete"><DeleteIcon /></Button>

const Editable = ({ children, content, Editor, EditorProps, onSave, onDelete, ...rest }) => {
  const [isEditing, setEditing] = useState(false)
  const [editingContent, setEditingContent] = useState(content)
  const { showEditingControls, theme } = useEditables()
  const classes = useStyles({ isEditing, theme })

  const toggleEditing = () => setEditing(!isEditing)

  const onContentChange = updatedContent => {
    setEditingContent(updatedContent)
  }

  const renderEditingButtons = () => {
    let editingButtons = [
      <SaveButton onSave={onSave} />,
      <DeleteButton onDelete={onDelete} />
    ]

    if (isEditing) {
      return editingButtons
    }

    return null
  }

  if (showEditingControls) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.actions}>
          <ToggleEditingButton toggleEditing={toggleEditing} isEditing={isEditing} />
          { renderEditingButtons() }
        </div>
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