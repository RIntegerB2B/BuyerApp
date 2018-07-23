import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import { Catalog } from '.././product/catalog/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  serviceUrl: string = AppSetting.serviceUrl;
  headers: Headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8'
  });
  requestOptions: RequestOptions = new RequestOptions({ headers: this.headers });

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  constructor(private http: Http, private httpClient: HttpClient) { }

  findCatalog(): Observable<any> {
    const calatalogUrl = 'catalog';
    const url: string = this.serviceUrl + calatalogUrl;
    return this.httpClient.get<Catalog[]>(url);

  }

  getCatalog(id): Observable<any> {
    const calatalogUrl = 'catalog/';
    const productUrl = '/product';
    const url: string = this.serviceUrl + calatalogUrl + id + productUrl;
    return this.httpClient.get<Catalog[]>(url);

  }
}
