import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddproductService } from 'src/app/services/addproduct.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  empForm: FormGroup;
  
  types: string[]=[
    'Breakfast',
    'Lunch',
    'Dinner',
  ];
  constructor(
    private fb: FormBuilder,
    private prodService: AddproductService,
     private _dialogRef: MatDialogRef<ProductAddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this.fb.group({
      Name: '',
      image: '',
      Description: '',
      Ingredients: '',
      Method: '',
      type: '',
      nutrition: '',
      CookingTime:'',
      TotalCalories:'',
      
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.prodService
          .updateProduct(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('product detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
    else {
      this.prodService.addProduct(this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Product added successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }

}

}
