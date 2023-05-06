import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productlist:any;
  selected:string="All";


  types:string[]=[
    "All",
    "dinner",
    "breakfast",
    "lunch"

  ]

  constructor(private ps:ProductService){
    this.ps.getProducts().subscribe(
      {
        next:(data:any)=> this.productlist=data,
        error:()=>this.productlist=[]
      }

    )
  
  }
}
