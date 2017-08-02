import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CompanyInfo } from './model/company';

export class CompanyData implements InMemoryDbService {
    
    createDb() {
        let companies: CompanyInfo[] = [
            {
                'id': 1,
                'companyName': 'Aamplify',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Aamplifynz',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'NYC',
                    'places': ['Bronx', 'Quuens', 'Staten Island' ]
                },{
                    'cityName': 'New York',
                    'places': ['Queens Village', 'Jamaica']
                }]
            },
            {
                'id': 2,
                'companyName': 'Bluescape',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://twitter.com/Bluescape',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'New Jerssy',
                    'places': ['Newark', 'Essex', 'Passaic']
                }]
            },
            {
                'id': 3,
                'companyName': 'Celtra',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://twitter.com/Celtra',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'New York',
                    'places': ['Staten Island', 'Brooklyn']
                }]
            },
            {
                'id': 4,
                'companyName': 'Zinith',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Zinith',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'Pennsylvania',
                    'places': ['Fire Field', 'Philadephia']
                }]
            },
            {
                'id': 5,
                'companyName': 'Apex',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                 'facebook': 'https://facebook.com/Apex',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'New Jersey',
                    'places': ['Jersey City', 'Hoboken']
                }]
            },
            {
                'id': 6,
                'companyName': 'Ajax',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Ajax',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'cities': [{
                    'cityName': 'New York',
                    'places': ['Queens', 'Garden State']
                }]
            }
        ]
        return { companies };
    }
}
