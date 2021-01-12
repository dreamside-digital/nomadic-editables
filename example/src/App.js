import React, { useState } from 'react'
import {
  Editable,
  EditablesProvider,
  EditableText,
  EditableNumber,
  EditableTextArea,
  EditableParagraph,
  EditableLink,
  EditableImageUpload,
  EditableFileUpload,
  EditableEmbeddedIframe,
  EditableBackgroundImage,
} from 'nomadic-editables'
// import 'nomadic-editables/dist/index.css'

const defaultContent = {
  title: { text: "hey sharon" },
  number: { number: 10 },
  textarea: { text: "hey sharon hey sharon hey sharon hey sharon" },
  link: { anchor: "i am a link", link: "/" },
  image: { filepath: "https://www.nomadiclabs.ca/img/sharon.jpg", title: "sharon's head", caption: "hey there" },
  bgImage: { filepath: "https://www.nomadiclabs.ca/img/sharon.jpg", title: "sharon's head", caption: "hey there" },
  iframe: {
    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
    height: '300px',
    width: '560px',
    allowFullScreen: 'true',
    title: 'Lofi hip hop radio'
  },
  paragraph: { text: "what up"}
}

const App = () => {
  const [content, setContent] = useState(defaultContent)

  return (
    <EditablesProvider showEditingControls={true}>
      <div>
        <h1>
          <EditableText content={content.title} onSave={(input) => setContent({ ...content, title: input })} />
        </h1>
      </div>

      <div>
        <h2>
          <EditableNumber content={content.number} onSave={(input) => setContent({ ...content, number: input })} />
        </h2>
      </div>

      <div>
        <EditableTextArea content={content.textarea} onSave={(input) => setContent({ ...content, textarea: input })} />
      </div>

      <div>
        <EditableParagraph content={content.paragraph} onSave={(input) => setContent({ ...content, paragraph: input })} />
      </div>

      <div>
        <EditableLink content={content.link} onSave={(input) => setContent({ ...content, link: input })} />
      </div>

      <div>
        <EditableImageUpload content={content.image} onSave={(input) => setContent({ ...content, image: input })} />
      </div>

      <div>
        <EditableFileUpload content={content.file} onSave={(input) => setContent({ ...content, file: input })} />
      </div>

      <div>
        <EditableEmbeddedIframe content={content.iframe} onSave={(input) => setContent({ ...content, iframe: input })} />
      </div>

      <div>
        <EditableBackgroundImage content={content.bgImage} onSave={(input) => setContent({ ...content, bgImage: input })}>
          <h3 style={{ paddingTop: '50px', paddingBottom: '50px', textAlign: 'center' }}>I have a background image</h3>
        </EditableBackgroundImage>
      </div>

    </EditablesProvider>
  )
}

export default App
