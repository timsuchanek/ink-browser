import React from 'react'
import Terminal from './Terminal'
import 'xterm/dist/xterm.css'
import renderToString from './renderToString'
import { InkExample } from './InkExample'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Terminal style={{ width: 200, height: 200 }}>
        {renderToString(<InkExample />)}
      </Terminal>
    </div>
  )
}

export default App
