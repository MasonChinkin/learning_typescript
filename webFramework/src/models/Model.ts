import { AxiosError, AxiosPromise, AxiosResponse } from 'axios'

interface ModalAttr<T> {
  set(update: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface Events {
  on(eventName: string, cb: () => void): void
  trigger(eventName: string): void
}

export interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModalAttr<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on
  trigger = this.events.trigger
  get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.attributes.get('id')

    if (typeof id !== 'number') {
      throw new Error('cannot fetch without id')
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save')
        console.log('save response: ', res.data)
      })
      .catch((err: AxiosError) => {
        this.trigger('error')
        throw new Error(err.message)
      })
  }
}
