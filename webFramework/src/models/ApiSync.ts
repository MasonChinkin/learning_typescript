import axios, { AxiosPromise } from 'axios'
import { HasId } from './Model'

export class ApiSync<T extends HasId> {
  constructor(public url: string) {}

  fetch(id: number): AxiosPromise {
    return axios(`${this.url}/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data

    if (id) {
      return axios.put(`${this.url}/${id}`, data)
    } else {
      return axios.post(this.url, data)
    }
  }
}
