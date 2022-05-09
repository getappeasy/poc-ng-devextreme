import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, throwError, Observable, map } from 'rxjs';

import { Customer } from '../../pages/material-group/customer';
import { IRespRmProductGroup } from 'src/app/pages/material-group/material-group';

@Injectable({
  providedIn: 'root',
})
export class MaterialGroupService {
  private materialGroupUrl = 'api/materialGroups';

  materialGroups$ = this.http
    .get<IRespRmProductGroup>(this.materialGroupUrl)
    .pipe(
      tap((rmGruop) =>
        console.log('Material Groups: ', JSON.stringify(rmGruop))
      ),
      map((rmGruop) => rmGruop.ResponseObj),
      catchError(this.handleError)
    );

  constructor(private http: HttpClient) {}

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
