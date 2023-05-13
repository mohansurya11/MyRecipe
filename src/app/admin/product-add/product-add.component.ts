import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddproductService } from 'src/app/services/addproduct.service';
import { CoreService } from 'src/app/services/core.service';

interface addproduct {
  Name: string;
  image: string;
  Description: string;
  Ingredients: string[];
  Method: string[];
  type: string;
  nutrition: string[];
  CookingTime: string;
  TotalCalories: string;
}


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  prodForm: FormGroup;

  types: string[]=[
    'Breakfast',
    'Lunch',
    'Dinner',
  ];
  Ingredients:string = "";
  Method:string = "";
  nutrition:string = "";


  constructor(
    private fb: FormBuilder,
    private prodService: AddproductService,
     private _dialogRef: MatDialogRef<ProductAddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.prodForm = this.fb.group<addproduct>({
      Name: '',
      image: '',
      Description: '',
      Ingredients: [],
      Method: [],
      type: '',
      nutrition: [],
      CookingTime:'',
      TotalCalories:'',
      
    });
  }
  ngOnInit(): void {
    this.prodForm.patchValue(this.data);
    this.Ingredients = this.data.Ingredients.join(',');
    this.Method = this.data.Method.join(',');
    this.nutrition = this.data.nutrition.join(',');


  }
  onFormSubmit() {
    if(this.Ingredients){
      this.prodForm.controls['Ingredients'].setValue(this.Ingredients.split(','));
    }
    if(this.Method){
      this.prodForm.controls['Method'].setValue(this.Method.split(','));
    }
    if(this.nutrition){
      this.prodForm.controls['nutrition'].setValue(this.nutrition.split(','));
    }
    
    if (this.prodForm.valid) {
      if (this.data) {
        this.prodService
          .updateProduct(this.data.id, this.prodForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('product details updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
    else {
      this.prodService.addProduct(this.prodForm.value).subscribe({
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
