import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './components/Counter'
import Navigation from './Navigation/Navigation'
import MenuItem from 'material-ui/MenuItem';

const App = (props) => (
  <div>
    <Router>
      <div>
        <Navigation title="ePla">
          <Link to='/'>
            <MenuItem>
              Home
          </MenuItem>
          </Link>
          <Link to='/counter'>
            <MenuItem>
              Counter
          </MenuItem>
          </Link>
        </Navigation>
        <div>
          <Route path="/counter" component={() => <Counter startNumber={5} />} />
        </div>
      </div>
    </Router>
  </div>
)

export default App
