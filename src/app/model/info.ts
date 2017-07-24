import { Address } from '../model/address';
// import { Children } from '../model/children';

export interface Info {
    name: string;
    email: string;
    phone: string;
    addresses: Address[];
}
