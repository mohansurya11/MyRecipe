import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent {
  translate: any
  log: any;
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"French",value:"french"}

  ]
  constructor(private router:Router,private route:ActivatedRoute,private ts:TranslateService){
    this.ts.use(this.lang)
  }
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


  
  
    changeLang():void{
       this.ts.use(this.lang)
    }
}
