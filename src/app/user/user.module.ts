import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductComponent } from './userhome/product/product.component';
import { ProductBoxComponent } from './userhome/product-box/product-box.component';
import { DetailsComponent } from './userhome/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { ReviewComponent } from './userhome/review/review.component';
import { ReviewPipe } from '../pipes/review.pipe';
import { MaterialModule } from '../material/material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


const route:Routes=[
  {path:'details/:id',component: DetailsComponent},

  {
    path:"home",component:HomeComponent,

    children:[
    {path:"",component: UserhomeComponent},
    {path:"product",component:ProductComponent},
    
    
  ]
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductComponent,
    ProductBoxComponent,
    DetailsComponent,
    TypefilterPipe,
    ReviewComponent,
    ReviewPipe

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [RouterModule]
})
export class UserModule { }
