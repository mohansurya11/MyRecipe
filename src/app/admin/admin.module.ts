import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const route:Routes=[
  {path:"",component:HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule

  ]
})
export class AdminModule { }
