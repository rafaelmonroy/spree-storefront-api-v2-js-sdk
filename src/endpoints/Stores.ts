import Http from '../Http'
import type { IStores, IStoresResult, IStore, IStoreResult } from '../interfaces/Store'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Stores extends Http {
  public async list(): Promise<IStoresResult> {
    return await this.spreeResponse<IStores>('get', routes.storesPath())
  }
  public async show(code: string, params: IQuery = {}): Promise<IStoreResult> {
    return await this.spreeResponse<IStore>('get', routes.storePath(code), {}, params)
  }
}
