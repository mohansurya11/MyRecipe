import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  homelist: any
  x: any
  constructor(private ps:ProductService){
    this.ps.getHomeProducts().subscribe(
      {
        next:(data:any)=> this.homelist=data,
        error:()=>this.homelist=[]
      }

    )
  
  }
}
