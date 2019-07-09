import React from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

export default class TerminalComponent extends React.Component<{
  style?: React.CSSProperties
}> {
  ref: any
  terminal: any
  setRef = (ref: any) => {
    this.ref = ref
  }
  componentDidMount() {
    if (this.ref) {
      this.terminal = new Terminal()
      this.terminal.loadAddon(new FitAddon())
      this.terminal.open(this.ref)
      this.write()
    }
  }
  write() {
    if (this.props.children) {
      this.terminal.clear()
      setTimeout(() => {
        if (this.props.children) {
          this.terminal.write(this.props.children.toString())
        }
      })
    }
  }
  componentDidUpdate() {
    if (this.terminal) {
      this.write()
    }
  }
  render() {
    return <div style={this.props.style} ref={this.setRef} />
  }
}
