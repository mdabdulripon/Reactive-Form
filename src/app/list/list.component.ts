import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../model/company';
import { companyServiceService } from '../company-service.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    pageTitle: string = 'Company Info:'
    errorMessage: string;
    companies: CompanyInfo[];

    constructor(private companyService: companyServiceService) { }

    ngOnInit(): void {
        this.companyService.getCompanies().subscribe( 
            companies => this.companies = companies,
            error => this.errorMessage = <any>error,
        );
    }

}
