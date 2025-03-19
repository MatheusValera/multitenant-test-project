export const Logs = {
  log: (...args: any) => {
    if (!process.env.ENV?.toLocaleLowerCase().startsWith('prod')) {
      args && console.log(...args)
    }
  },
  info: (...args: any) => {
    args && console.info(...args)
  },
  error: (...args: any) => {
    args && console.error(...args)
  },
  warn: (...args: any) => {
    args && console.warn(...args)
  },
  debug: (...args: any) => {
    args && console.debug(...args)
  },
  trace: (...args: any) => {
    args && console.trace(...args)
  }
}
