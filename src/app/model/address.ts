import { Children } from '../model/children';

export interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
    numberOfChildren: string;
    children: Children[];
}
