import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private updateResponse:any;

  constructor(private _service:ProductDataService) { }

  ngOnInit() {
  }
  
  public updateProduct(product:any){
    this._service.update(product).subscribe(res=>{
      this.updateResponse = res;
    })
  }

}
