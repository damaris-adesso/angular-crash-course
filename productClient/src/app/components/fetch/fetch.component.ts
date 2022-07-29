import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service'


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  private getProductResponse:any;

  constructor(private _service:ProductDataService) { }

  ngOnInit() {
  }

  public getProduct(id:number){
    this._service.getProducts(id).subscribe(res=>{
      this.getProductResponse = res;
    })
  }

}
