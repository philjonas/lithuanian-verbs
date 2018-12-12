import { Component, Input } from '@angular/core';

@Component({
    selector: 'data-table',
    templateUrl: './templates/data.table.html',
    styleUrls: ['./styles/data.table.sass']
})

export class DataTable {

    @Input()
    data: any[] = [];

    @Input()
    columns: string[] = [];

}