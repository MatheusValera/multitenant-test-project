import { Logs } from '../../src/util/Logs'

describe('Logs', () => {
  it('should log a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation()
    const message = 'Test log message'
    Logs.log(message)
    expect(consoleLogSpy).toHaveBeenCalledWith(message)
    consoleLogSpy.mockRestore()
  })

  it('should warn a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'warn').mockImplementation()
    const message = 'Test log message'
    Logs.warn(message)
    expect(consoleLogSpy).toHaveBeenCalledWith(message)
    consoleLogSpy.mockRestore()
  })

  it('should info a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'info').mockImplementation()
    const message = 'Test log message'
    Logs.info(message)
    expect(consoleLogSpy).toHaveBeenCalledWith(message)
    consoleLogSpy.mockRestore()
  })

  it('should error a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'error').mockImplementation()
    const message = 'Test log message'
    Logs.error(message)
    expect(consoleLogSpy).toHaveBeenCalledWith(message)
    consoleLogSpy.mockRestore()
  })

  it('should debug a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'debug').mockImplementation()
    const message = 'Test log message'
    Logs.debug(message)
    expect(consoleLogSpy).toHaveBeenCalledWith(message)
    consoleLogSpy.mockRestore()
  })

  it('should trace a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'trace').mockImplementation()
    const message = 'Test log message'
    Logs.trace(message)
    expect(consoleLogSpy).toHaveBeenCalledWith(message)
    consoleLogSpy.mockRestore()
  })
})
