import React from 'react'
import Button from './Button.js'

const App = (props) => (
  <div>
    <Button
      onClick={() => alert("Clicked")}
    />

    <Button
      onClick={() => alert("Woohoo")}
    />
  </div>
)

export default App
