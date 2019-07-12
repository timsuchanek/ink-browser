import React from 'react'
import Terminal from './Terminal'
import 'xterm/dist/xterm.css'
import renderToString from './renderToString'
import { InkExample } from './InkExample'
import { Terminal as XTerminal } from 'xterm'

class App extends React.Component {
  state = {
    output: '',
  }
  terminal?: XTerminal
  componentDidMount() {
    renderToString(
      <InkExample />,
      { columns: 60, terminal: this.terminal },
      output => {
        this.setState({ output })
      },
    )
  }
  setTerminal = (terminal: XTerminal) => {
    this.terminal = terminal
  }
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Terminal
          style={{ width: 200, height: 200 }}
          getTerminal={this.setTerminal}
        >
          {this.state.output}
        </Terminal>
      </div>
    )
  }
}

export default App
