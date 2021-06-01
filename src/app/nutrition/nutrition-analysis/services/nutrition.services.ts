import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as fromModels from '../models'
@Injectable({
    providedIn: 'root'
})
export class NutritionServices {

    constructor(private http: HttpClient) { }

    public results:any;


    postNutritionAnalysis(body: {
            // title: string,
             ingr:[]
        }): Observable<any> {
            const _headers: HttpHeaders = new HttpHeaders().set(
                'Content-Type','application/json'
              );
        let route = "https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92";
        
        return this.http.post( route, JSON.stringify (body),
            {
                headers: _headers,
              }
            )
    }

 



}
