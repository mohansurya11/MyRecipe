import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mohan';

  currentUrl: string = "";
  constructor(private log:LoginService,private router:Router){

         
    console.log(this.router.url);
     
  }

ngOnInit(): void {
  this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
  .subscribe(event => {            
    this.currentUrl = event.url;
     console.log('this is what your looking for ', event.url);       
  });
}

  ngAfterViewInit(){

    if(!this.log.getStatus()){

               

      this.router.navigate(['login'])

   }

   else{

     if(this.log.usertype=="admin")

       this.router.navigate(['admin/home']);

     else

       this.router.navigate(['user/home']);

   }

  }


}
