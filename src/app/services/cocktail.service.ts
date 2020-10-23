import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

  constructor(private http: HttpClient) { }

  searchCocktail = (value : string) : Observable<object> => {
    return this.http.get(this.apiUrl, {
      params: {
        s: value
      }
    });
  }
}
