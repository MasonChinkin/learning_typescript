type Cb = () => void

export class Eventing {
  events: { [key: string]: Cb[] } = {}

  on = (eventName: string, cb: Cb): void => {
    const eventHandlers = this.events[eventName] || []
    eventHandlers.push(cb)
    this.events[eventName] = eventHandlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName] || []

    if (handlers.length) {
      handlers.forEach((cb: Cb) => cb())
    }
  }
}
