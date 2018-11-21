import React from 'react'

import Paper from './components/Paper'
import Counter from'./components/Counter'

const App = (props) => (
  <Paper>
    <Counter
    startNumber={0}
    />
  </Paper>
)

export default App
