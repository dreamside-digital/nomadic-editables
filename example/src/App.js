import React, { useState } from 'react'
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

const defaultContent = {
  title: { text: "hey sharon" },
  number: { number: 10 },
  textarea: { text: "hey sharon hey sharon hey sharon hey sharon" },
  link: { anchor: "i am a link", link: "/" },
  image: { imageSrc: "https://www.nomadiclabs.ca/img/sharon.jpg", title: "sharon's head", caption: "hey there" },
}

const App = () => {
  const [content, setContent] = useState(defaultContent)

  return (
    <EditablesProvider showEditingControls={true}>
      <div>
        <h1>
          <EditableText content={content.title} onSave={(input) => setContent({ ...content, title: input })}>
            {content.title.text}
          </EditableText>
        </h1>
      </div>

      <div>
        <h2>
          <EditableNumber content={content.number} onSave={(input) => setContent({ ...content, number: input })}>
            {content.number.number}
          </EditableNumber>
        </h2>
      </div>

      <div>
        <h2>
          <EditableTextArea content={content.textarea} onSave={(input) => setContent({ ...content, textarea: input })}>
            {content.textarea.text}
          </EditableTextArea>
        </h2>
      </div>

      <div>
        <EditableLink content={content.link} onSave={(input) => setContent({ ...content, link: input })}>
          <a href={content.link.link}>{content.link.anchor}</a>
        </EditableLink>
      </div>

      <div>
        <EditableImageUpload content={content.image} onSave={(input) => setContent({ ...content, image: input })}>
          <a href={content.link.link}>{content.link.anchor}</a>
        </EditableImageUpload>
      </div>

    </EditablesProvider>
  )
}

export default App
