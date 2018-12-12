import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AppModel } from '../../models/app.model';

@Component({
    selector: 'tab-charts',
    templateUrl: './templates/tab.charts.html',
    styleUrls: ['./styles/tab.charts.sass']
})

export class TabCharts {
    constructor(public appModel: AppModel) { }

}