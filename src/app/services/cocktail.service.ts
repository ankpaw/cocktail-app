import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  searchApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";
  getApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  constructor(private http: HttpClient) { }

  searchCocktail = (value : string) : Observable<object> => {
    return this.http.get(this.searchApiUrl, {
      params: {
        s: value
      }
    });
  }

  getAllCocktails = () : Observable<object> => {
    return this.http.get(this.getApiUrl);
  }
}
