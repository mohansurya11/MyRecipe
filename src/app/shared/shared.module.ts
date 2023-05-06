import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    MenuOutlineComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[MenuOutlineComponent]
})
export class SharedModule { }
