import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

/**
 * Handled loading the external library ondemand into our app
 */
@Injectable({ providedIn: 'root' })
export class ExternalLibraryService {

    private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

    constructor(@Inject(DOCUMENT) private readonly document: any) { }

    // forkjoin parameters will grow when we are adding any new external library into app
    lazyLoadLibrary(resourceURL): Observable<any> {
        return forkJoin([
            this.loadScript(resourceURL)
        ]);
    }

    private loadScript(url: string): Observable<any> {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }

        this._loadedLibraries[url] = new ReplaySubject();

        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };

        this.document.body.appendChild(script);
        return this._loadedLibraries[url].asObservable();
    }
}


declare const CryptoJS: any;

@Injectable({providedIn: 'root'})
export class UtilService {
    constructor() { }
    Encrypt(data: any): any {
        let jsondata = JSON.stringify(data);
        return CryptoJS.AES.encrypt(jsondata, environment.encKey);
    }
    Decrypt(encData: any): any {
        var bytes = CryptoJS.AES.decrypt(encData.toString(), environment.encKey);
        var data = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data);
    }
    static GenerateGUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}