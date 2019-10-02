import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AppModel } from '../../models/app.model';

@Component({
    selector: 'app-tab-table',
    templateUrl: './templates/tab.table.html',
    styleUrls: ['./styles/tab.table.sass']
})

export class TabTableComponent {
    constructor(public appModel: AppModel) { }
}
