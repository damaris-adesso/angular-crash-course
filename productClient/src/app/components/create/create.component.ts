import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private createResponse:any;
  
  constructor(private _service:ProductDataService) { }

  ngOnInit() {
  }

  public createProduct(product:any){
    this._service.create(product).subscribe(res=>{
      this.createResponse = res;
    })
  }

}
