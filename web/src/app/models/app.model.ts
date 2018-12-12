export class AppModel {
    selectedState: number = 1;

    declensions: any[];
    prepositionsByCase: any[];
    maxDeclensionNumber: number;
    maxPrepositionNumber: number;

    private _readableList: any[];
    private _columnNames: string[] = [];

    set readableList(value: any[]) {
        this._readableList = value;
        if (this._readableList && this._readableList.length > 0) {
            this._columnNames = Object.keys(this._readableList[0]);
        }
    }

    get readableList(): any[] {
        return this._readableList;
    }

    get columnNames(): any[] {
        return this._columnNames;
    }

    get chartsMaxNumber(): number {
        if (!this.maxDeclensionNumber || !this.maxPrepositionNumber) return;

        return Math.max(this.maxDeclensionNumber, this.maxPrepositionNumber);
    }

    colors: string[] = ['#004071', '#cddde1', '#e6eef0',
        '#ebf2e7', '#d7e5d0', '#afcca1',
        '#ec8ea4', '#f6c6d1', '#fae3e8',
        '#f00', '#0f0', '#00f',
        '#f00', '#0f0', '#00f',]
}