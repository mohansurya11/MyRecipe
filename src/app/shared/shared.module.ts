import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { FooterComponent } from './footer/footer.component';
import { HoverDirective } from './directives/hover.directive';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MenuOutlineComponent,
    FooterComponent,
    HoverDirective

  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[MenuOutlineComponent,FooterComponent,HoverDirective]

})
export class SharedModule { }
