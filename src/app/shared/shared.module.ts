import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { FooterComponent } from './footer/footer.component';
import { HoverDirective } from './directives/hover.directive';



@NgModule({
  declarations: [
    MenuOutlineComponent,
    FooterComponent,
    HoverDirective

  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[MenuOutlineComponent,FooterComponent,HoverDirective]
  
})
export class SharedModule { }
