import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../model/company';

import { companyServiceService } from '../company-service.service';





@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
