import React from 'react'

import Paper from './components/Paper'
import Counter from './components/Counter'
import Navigation from './Navigation/Navigation'

const App = (props) => (
  <div> <Navigation />
    <Paper>
      <Counter
        startNumber={0}
      />
    </Paper>
  </div>
)

export default App
