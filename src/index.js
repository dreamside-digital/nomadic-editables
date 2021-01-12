import React from 'react'
import './index.module.css'

import {
  EditablesContext,
  EditablesProvider,
  useEditables
} from 'common/EditablesContext'

import Editable from 'common/Editable'
import EditableText from 'editables/EditableText';
import EditableParagraph from 'editables/EditableParagraph';
import EditableTextArea from 'editables/EditableTextArea';
import EditableNumber from 'editables/EditableNumber';
import EditableLink from "./editables/EditableLink";
import EditableImageUpload from "./editables/EditableImageUpload";
import EditableFileUpload from "./editables/EditableFileUpload";
import EditableEmbeddedIframe from "./editables/EditableEmbeddedIframe";
import EditableBackgroundImage from "./editables/EditableBackgroundImage";

import ImageUploadEditor from "./editingTools/ImageUploadEditor";
import FileUploadEditor from "./editingTools/FileUploadEditor";
import LinkEditor from "./editingTools/LinkEditor";
import NumberEditor from "editingTools/NumberEditor";
import PlainTextEditor from "editingTools/PlainTextEditor";
import RichTextEditor from "editingTools/RichTextEditor";
import TextAreaEditor from "editingTools/TextAreaEditor";
import EmbeddedIframeEditor from "./editingTools/EmbeddedIframeEditor";

export {
  Editable,
  EditablesContext,
  EditablesProvider,
  useEditables,
  EditableText,
  EditableTextArea,
  EditableParagraph,
  EditableNumber,
  EditableLink,
  EditableImageUpload,
  EditableFileUpload,
  EditableEmbeddedIframe,
  EditableBackgroundImage,
  NumberEditor,
  PlainTextEditor,
  RichTextEditor,
  TextAreaEditor,
  LinkEditor,
  FileUploadEditor,
  ImageUploadEditor,
  EmbeddedIframeEditor
}
