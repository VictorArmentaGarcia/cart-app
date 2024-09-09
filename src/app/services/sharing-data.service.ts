import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  get IdProductDelete(){
    return this._idProductDelete;
  }

}
