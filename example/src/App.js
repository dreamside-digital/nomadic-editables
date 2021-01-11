import React from 'react'
import {
  Editable,
  EditablesProvider,
  EditableText,
  EditableNumber,
  EditableTextArea,
  EditableLink,
  EditableImageUpload,
} from 'nomadic-editables'
// import 'nomadic-editables/dist/index.css'

const content = {
  title: { text: "hey sharon" },
  number: { number: 10 },
  textarea: { text: "hey sharon hey sharon hey sharon hey sharon" },
  link: { anchor: "imma link", link: "/" },
  image: { imageSrc: "https://www.nomadiclabs.ca/img/sharon.jpg", title: "sharon's head", caption: "hey there" },
}

const App = () => {
  return (
    <EditablesProvider showEditingControls={true}>
      <div>
        <h1>
          <EditableText content={content.title}>
            {content.title.text}
          </EditableText>
        </h1>
      </div>

      <div>
        <h2>
          <EditableNumber content={content.number}>
            {content.number.number}
          </EditableNumber>
        </h2>
      </div>

      <div>
        <h2>
          <EditableTextArea content={content.textarea}>
            {content.textarea.text}
          </EditableTextArea>
        </h2>
      </div>

      <div>
        <EditableLink content={content.link}>
          <a href={content.link.link}>{content.link.anchor}</a>
        </EditableLink>
      </div>

      <div>
        <EditableImageUpload content={content.image}>
          <a href={content.link.link}>{content.link.anchor}</a>
        </EditableImageUpload>
      </div>

    </EditablesProvider>
  )
}

export default App
