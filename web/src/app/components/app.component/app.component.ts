import { Component } from '@angular/core';
import { JSONService } from '../../services/json.services';
import { AppModel } from '../../models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.sass']
})
export class AppComponent {
  constructor(public jsonService: JSONService, public appModel: AppModel) {
    this.getDeclensions();
    this.getPrepositionsByCase();
    this.getReadableList();
  }

  getDeclensions(): void {
    this.jsonService.getDeclensions().subscribe((x: any) => {
      this.appModel.declensions = x;
      this.appModel.maxDeclensionNumber = this.getMax(x.map((y: any) => y.count));

    });
  }

  getPrepositionsByCase(): void {
    this.jsonService.getPrepositionsByCase().subscribe((x: any) => {
      this.appModel.prepositionsByCase = x;
      this.appModel.maxPrepositionNumber = this.getMax(x.map((y: any) => y.count));
    });
  }

  getReadableList(): void {
    this.jsonService.getReadableList().subscribe((x: any) => {
      this.appModel.readableList = x;
    });
  }

  isStateActive(value: number): boolean {
    return this.appModel.selectedState === value;
  }

  onSelectedStateChanged(value: number): void {
    this.appModel.selectedState = value;
  }

  private getMax(list: number[]): number {
    return list.reduce((a, b) => {
      return Math.max(a, b);
    });
  }

}
