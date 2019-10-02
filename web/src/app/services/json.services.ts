import { Injector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class JSONService {

    constructor(private http: Http) { }

    getDeclensions(): Observable<Response> {
        return this.http.get('assets/data/declensions.json')
            .pipe(map((x: any) => x.json()));
    }

    getPrepositionsByCase(): Observable<Response> {
        return this.http.get('assets/data/prepositions_by_case.json')
            .pipe(map((x: any) => x.json()));
    }

    getReadableList(): Observable<Response> {
        return this.http.get('assets/data/readable_list.json')
            .pipe(map((x: any) => x.json()));
    }

}
