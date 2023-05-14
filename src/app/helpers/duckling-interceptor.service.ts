import {Injectable} from '@angular/core';
import {AlertService} from "../services/alert.service";
import {Router} from "@angular/router";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DucklingInterceptorService implements HttpInterceptor {

  constructor(private router: Router,
              private alertService: AlertService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request = req;
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMessage = '';

        switch (err.status) {
          case 400:
          case 404:
          case 204: { // badRequest, notFound, notContent
            this.alertService.error(err.error.detail, 'Error');
            break;
          }
          case 500: { // serverError
            this.alertService.error('Error interno del servidor', 'Error del Servidor');
            break;
          }
          default: {
            if (err.error instanceof ErrorEvent) {
              errorMessage = err.error.message;
            } else {
              errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
            }
            break;
          }
        }
        return throwError(() => err);
      })
    );
  }
}
