import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface StoreAttr extends JsonApiDocument {
    type: string;
    id: string;
    attributes: {
        name: string;
        url: string;
        meta_description: string;
        meta_keywords: string;
        seo_title: string;
        default_currency: string;
        default: boolean;
        supported_currencies: string;
        facebook: string;
        twitter: string;
        instagram: string;
        default_locale: string;
        customer_support_email: string;
        default_country_id: number;
        description: string;
        address: string;
        contact_phone: string;
        supported_locales: string;
        favicon_path: string;
    };
    relationships: IRelationships;
}
export interface IStore extends JsonApiSingleResponse {
    data: StoreAttr;
}
export interface IStores extends JsonApiListResponse {
    data: StoreAttr[];
}
export interface IStoreResult extends ResultResponse<IStore> {
}
export interface IStoresResult extends ResultResponse<IStores> {
}
