import { render } from 'ink'
import EventEmitter from 'eventemitter3'

export interface StreamOptions {
  columns?: number
}

// Fake process.stdout
export class Stdout extends EventEmitter {
  output: string
  columns: number
  constructor({ columns }: StreamOptions) {
    super()
    this.output = ''
    this.columns = columns || 100
  }

  write(str: string) {
    this.output = str
  }

  toString() {
    return this.output.replace(/\n/g, '\r\n')
  }
}

export class Stdin extends EventEmitter<any> {
  readonly readableHighWaterMark: number = 1000
  readonly readableLength: number = 10000
  isRaw?: boolean = true
  isTTY: boolean = true
  _read(size: number) {}
  _destroy(err: Error | null, callback: (err?: null | Error) => void) {}
  setRawMode(mode: boolean) {}
  push(chunk: any, encoding?: string) {
    return true
  }
  destroy(error?: Error) {}
  setEncoding(env: any) {}
  resume() {}
}

export default function renderToString(
  node: any,
  { columns }: StreamOptions = {},
) {
  const stdout = new Stdout({ columns })
  const stdin = new Stdin()

  render(node, {
    stdout,
    stdin,
    debug: true,
  } as any)

  return String(stdout)
}
