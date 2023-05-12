import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
stringify(arg0: any): any {
throw new Error('Method not implemented.');
}
  reviews:any;
  product:any;
  details:any;
  id:any;
  productlist: any;
  panelOpenState = false;

  // serving:number=1;
  constructor(private ps:ProductService,private ar:ActivatedRoute,rs:ReviewService){
    rs.getReviews().subscribe(
      {
        next:(data:any)=>this.reviews=data,
        error:()=>this.reviews={}
      }
    )
    this.ar.params.subscribe(
      {
        next: (params)=>{
          this.id=params['id']
          this.readData()
        
        },
        error:()=>this.id=0

      }
      
    )
  }
  readData(){
    this.ps.getProductById(this.id).subscribe({
      next:(data:any)=>this.product=data,
      error:()=>this.product={}
    })
    this.ps.getProducts().subscribe(
      {
        next:(data:any)=> this.productlist=data,
        error:()=>this.productlist=[]
      }

    )
    this.ps.getDetails(this.id).subscribe({
      next: (data:any)=> this.details =data,
      error: ()=> this.details = {}
  })
    }


    // i=1
    // plus(){
    //   if(this.i>=1){
    //     this.i++;
    //     this.serving=this.i
    //   }

    // }
    // minus(){
    //   if(this.i>1){
    //     this.i--;
    //     this.serving=this.i
    //   }
    // }
    // calculate(){
    //   for(let item of this.details.Ingredients){
    //     let items=item.split("")
        
        
    //   }

    // }

}
