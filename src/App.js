import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './components/Counter'
import Navigation from './Navigation/Navigation'

const App = (props) => (
  <div>
    <Navigation
      title="ePla"
    />
    <Router>
      <div>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/counter'>Counter</Link></li>
          </ul>
        </div>
        <div>
          <Route path="/counter" component={() => <Counter startNumber={5}/>} />
        </div>
      </div>
    </Router>
  </div>
)

export default App
