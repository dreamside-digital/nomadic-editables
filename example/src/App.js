import React from 'react'
import {
  Editable,
  EditablesProvider,
  EditableText
} from 'nomadic-editables'
// import 'nomadic-editables/dist/index.css'

const content = {
  title: { text: "hey sharon" }
}
const App = () => {
  return (
    <EditablesProvider showEditingControls={true}>
      <h1>
        <EditableText content={content.title}>
          {content.title.text}
        </EditableText>
      </h1>
    </EditablesProvider>
  )
}

export default App
