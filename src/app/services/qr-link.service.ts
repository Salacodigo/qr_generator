import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrLinkService {

  public url : string = '';

  constructor( ) { }

  getUrl() : string {
    return this.url;
  }

  setUrl( url : string ) : void {
    this.url = url;
  }
}
