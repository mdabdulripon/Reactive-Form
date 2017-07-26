import { Address } from '../model/address';

export interface Info {
    name: string;
    email: string;
    phone: string;
    addresses: Address[];
}
