import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CompanyInfo } from './model/company';

export class CompanyData implements InMemoryDbService {
    
    createDb() {
        let company: CompanyInfo[] = [
            {
                'id': 1,
                'companyName': 'Aamplify',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': '',
                'twiter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'NYC',
                    'places': ['Bronx', 'Quuens', 'Staten Island' ]
                },{
                    'cityName': 'New Jersey',
                    'places': ['Queens Village', 'Jamaica']
                }]
            },
            {
                'id': 2,
                'companyName': 'Bluescape',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': '',
                'twiter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'Salt lake city',
                    'places': ['New Jersey', 'Garden State']
                }]
            },
            {
                'id': 3,
                'companyName': 'Celtra',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': '',
                'twiter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'Salt lake city',
                    'places': ['New Jersey', 'Garden State']
                }]
            }
        ]
        return {company};
    }
}
