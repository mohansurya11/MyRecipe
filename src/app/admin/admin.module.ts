import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';

const route:Routes=[
  {path:"home",component:HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
