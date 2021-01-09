import React from 'react'
import {
  Editable,
  EditablesProvider,
  PlainTextEditor
} from 'nomadic-editables'
// import 'nomadic-editables/dist/index.css'

const App = () => {
  return (
    <EditablesProvider showEditingControls={true}>
      <Editable Editor={PlainTextEditor}>
        <h1>hihihi</h1>
      </Editable>
    </EditablesProvider>
  )
}

export default App
