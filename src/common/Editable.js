import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useEditables, makeStylesWithTheme } from 'common/EditablesContext'
import { ReactComponent as AddIcon } from 'assets/add.svg'
import { ReactComponent as EditIcon } from 'assets/edit.svg'
import { ReactComponent as CancelIcon } from 'assets/cancel.svg'
import { ReactComponent as SaveIcon } from 'assets/done.svg'
import { ReactComponent as DeleteIcon } from 'assets/delete.svg'
import IconButton from './IconButton'

import styles from '../index.module.css'

const useStyles = makeStylesWithTheme(theme => ({
  '@keyframes borderDance': {
    '0%': {
      backgroundPosition: 'left top, right bottom, left bottom, right top'
    },
    '100%': {
      backgroundPosition: 'left 10px top, right 10px bottom, left bottom 10px , right top 10px'
    }
  },
  wrapper: props => ({
    position: "relative",
    margin: '1px',
    marginBottom: '12px',
    borderRadius: '4px',
    padding: '2px',
    backgroundImage: `linear-gradient(90deg, ${theme.colors.primary} 50%, transparent 50%), linear-gradient(90deg, ${theme.colors.primary} 50%, transparent 50%), linear-gradient(0deg, ${theme.colors.primary} 50%, transparent 50%), linear-gradient(0deg, ${theme.colors.primary} 50%, transparent 50%)`,
    backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
    backgroundSize: '10px 2px, 10px 2px, 2px 10px, 2px 10px',
    backgroundPosition: 'left top, right bottom, left bottom, right top',
    animation: props.isSaving ? '$borderDance 1s infinite linear' : 'none',
  }),
  editor: props => ({
    transition: 'all 0.15s ease',
    filter: props.isSaving ? 'blur(3px)' : 'none',
  }),
  editing: {
    backgroundColor: `rgba(255,255,255,0.75)`,
    padding: '0 !important',
    border: `2px solid ${theme.colors.primary}`,
  },
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

const Editable = ({ children, content, loader, Editor, onSave, onDelete, showChildren, isSaving, ...rest }) => {
  const [isEditing, setEditing] = useState(false)
  const [editingContent, setEditingContent] = useState(content)
  const [loadedEditor, setEditor] = useState()
  const { showEditingControls, theme } = useEditables()
  const classes = useStyles({ isEditing, isSaving })

  useEffect(() => {
    setEditingContent(content)
  }, [content])

  useEffect(() => {
    const loadEditor = async () => {
      const { default: Component } = await loader()
      setEditor({ component: Component })
    }

    if (isEditing && loader && !loadedEditor) {
      loadEditor()
    }

  }, [isEditing, loadedEditor, loader])

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
    const EditorComponent = Editor || loadedEditor?.component
    const showEditor = (isEditing || isSaving) && EditorComponent

    return (
      <div className={`${classes.wrapper} ${isEditing ? classes.editing : ''}`}>
        <div className={classes.actions}>
          <ToggleEditingButton toggleEditing={toggleEditing} isEditing={isEditing} />
          { isEditing && <DeleteButton onDelete={handleDelete} /> }
          { isEditing && <SaveButton onSave={handleSave} /> }
        </div>
        {
          showEditor &&
          <div className={classes.editor}>
            <EditorComponent
              content={editingContent}
              onContentChange={onContentChange}
              classes={classes}
              { ...rest }
            />
          </div>
        }
        { (!showEditor || showChildren) && children }
      </div>
    )
  }

  return children
}

export default Editable