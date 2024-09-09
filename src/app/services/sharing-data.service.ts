import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductDelete: EventEmitter<number> = new EventEmitter();

  private  _productEventEmiter: EventEmitter<Product> = new EventEmitter<Product>();


  constructor() { }

  get IdProductDelete(): EventEmitter<number> {
    return this._idProductDelete;
  }

  get productEventEmiter() : EventEmitter<Product> {
    return this._productEventEmiter;
  }

}
