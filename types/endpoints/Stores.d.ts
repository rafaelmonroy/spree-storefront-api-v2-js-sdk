import Http from '../Http';
import type { IStoresResult, IStoreResult } from '../interfaces/Store';
import type { IQuery } from '../interfaces/Query';
export default class Stores extends Http {
    list(): Promise<IStoresResult>;
    show(code: string, params?: IQuery): Promise<IStoreResult>;
}
