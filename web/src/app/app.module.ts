import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSONService } from './services/json.services';

import { AppComponent } from './components/app.component/app.component';
import { HttpModule } from '@angular/http';
import { AppModel } from './models/app.model';
import { DataTableComponent } from './components/data.table.component/data.table';
import { BarChartComponent } from './components/bar.chart/bar.chart';
import { TabChartsComponent } from './components/tab.charts/tab.charts';
import { TabTableComponent } from './components/tab.table/tab.table';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent,
    BarChartComponent,
    TabChartsComponent,
    TabTableComponent,
    DataTableComponent],
  bootstrap: [AppComponent],
  providers: [JSONService, AppModel]
})
export class AppModule { }
