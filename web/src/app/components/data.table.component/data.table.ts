import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-data-table',
    templateUrl: './templates/data.table.html',
    styleUrls: ['./styles/data.table.sass']
})

export class DataTableComponent {

    @Input()
    data: any[] = [];

    @Input()
    columns: string[] = [];

}
