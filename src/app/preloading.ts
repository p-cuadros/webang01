import { PreloadingStrategy, Route } from "@angular/router";
import { EMPTY, Observable } from "rxjs";

export class MyCustomPreloading extends PreloadingStrategy {
    
    preload(route: Route, preload: () => Observable<any>): Observable<any> {
        return route.data && route.data['preload'] ? preload() : EMPTY;
    }
}