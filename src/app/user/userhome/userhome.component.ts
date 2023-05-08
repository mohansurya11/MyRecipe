import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  homelist: any
  x: any
  constructor(private ps:ProductService,private router:Router,private route:ActivatedRoute){
    this.ps.getHomeProducts().subscribe(
      {
        next:(data:any)=> this.homelist=data,
        error:()=>this.homelist=[]
      }

    )
  
  }
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate([url],{relativeTo:this.route})
    }
  }
}
