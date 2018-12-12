import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSONService } from './services/json.services'

import { AppComponent } from './components/app.component/app.component';
import { HttpModule } from '@angular/http';
import { AppModel } from './models/app.model';
import { DataTable } from './components/data.table.component/data.table';
import { BarChart } from './components/bar.chart/bar.chart';
import { TabCharts } from './components/tab.charts/tab.charts';
import { TabTable } from './components/tab.table/tab.table';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent,
    BarChart,
    TabCharts,
    TabTable,
    DataTable],
  bootstrap: [AppComponent],
  providers: [JSONService, AppModel]
})
export class AppModule { }
