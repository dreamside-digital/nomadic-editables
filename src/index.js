import React from 'react'
import './index.module.css'

import {
  EditablesContext,
  EditablesProvider,
  useEditables
} from 'common/EditablesContext'

import Editable from 'common/Editable'
import EditableText from 'editables/EditableText';
import EditableTextArea from 'editables/EditableTextArea';
import EditableNumber from 'editables/EditableNumber';
import EditableLink from "./editables/EditableLink";
import EditableImageUpload from "./editables/EditableImageUpload";
// import EditableFileUpload from "./editables/EditableFileUpload";
// import EditableBackgroundImage from "./editables/EditableBackgroundImage";
// import EditableEmbeddedIframe from "./editables/EditableEmbeddedIframe";
// import EditableLightboxImageUpload from "./editables/EditableLightboxImageUpload";

import FileUploadEditor from "./editingTools/FileUploadEditor";
import ImageUploadEditor from "./editingTools/ImageUploadEditor";
import LinkEditor from "./editingTools/LinkEditor";
import NumberEditor from "editingTools/NumberEditor";
import PlainTextEditor from "editingTools/PlainTextEditor";
import TextAreaEditor from "editingTools/TextAreaEditor";
// import EmbeddedIframeEditor from "./editingTools/EmbeddedIframeEditor";

export {
  Editable,
  EditablesContext,
  EditablesProvider,
  useEditables,
  EditableText,
  EditableTextArea,
  EditableNumber,
  EditableLink,
  EditableImageUpload,
  NumberEditor,
  PlainTextEditor,
  TextAreaEditor,
  LinkEditor,
  ImageUploadEditor
}
