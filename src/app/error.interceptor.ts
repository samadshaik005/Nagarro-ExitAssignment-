import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any> , next: HttpHandler) {

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
       alert(err.error.message);
       return throwError(err);

      })
    );

  }

}
