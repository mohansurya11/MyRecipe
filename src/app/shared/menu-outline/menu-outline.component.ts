import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent {
  log: any;
  constructor(private router:Router,private route:ActivatedRoute){}
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate([url],{relativeTo:this.route})
    }
  }
  
  
  logout(){
    this.router.navigateByUrl('/login')
  }
}
