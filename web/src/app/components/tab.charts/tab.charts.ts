import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AppModel } from '../../models/app.model';

@Component({
    selector: 'app-tab-charts',
    templateUrl: './templates/tab.charts.html',
    styleUrls: ['./styles/tab.charts.sass']
})

export class TabChartsComponent {
    constructor(public appModel: AppModel) { }
}
