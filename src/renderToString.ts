import { render } from 'ink'

export interface StreamOptions {
  columns?: number
}

// Fake process.stdout
export class Stream {
  output: string
  columns: number
  constructor({ columns }: StreamOptions) {
    this.output = ''
    this.columns = columns || 100
  }

  write(str: string) {
    this.output = str
  }

  get() {
    return this.output
  }
}

export default function renderToString(
  node: any,
  { columns }: StreamOptions = {},
) {
  const stream = new Stream({ columns })

  render(node, {
    stdout: stream,
    stdin: {},
    debug: true,
  } as any)

  return stream.get()
}
