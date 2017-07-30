import { City } from '../model/city';

export interface CompanyInfo {
    id: number;
    companyName: string;
    companyUrl: string;
    companyBio: string;
    facebook: string;
    twiter: string;
    linkedin: string;
    cities: City[];
}
