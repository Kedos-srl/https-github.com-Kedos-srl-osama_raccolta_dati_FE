import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (localStorage['token']) {
			req.body.token = localStorage['token'];
		}
		const headers = new HttpHeaders({
			  'Content-Type':  'application/json',
			  "Authorization": "Basic " + btoa("osamaRDApi:0$4m!D5e@x+")
			})
		
		  
		req = req.clone({headers: headers});
		return next.handle(req);
	}
}