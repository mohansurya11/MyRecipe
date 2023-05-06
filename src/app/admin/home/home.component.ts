import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';
import { AddproductService } from 'src/app/services/addproduct.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'image',
    'description',
    'ingredients',
    'method',
    'type',
    'nutrition',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(private _dialog:MatDialog,private router:Router,
  private _empService: AddproductService,
  private _coreService: CoreService
  ){}

ngOnInit(): void {
  this.getProductList();
}

openAddEditProductForm(){
  const dialogRef = this._dialog.open(ProductAddComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductList();
        }
      },
    });
}
getProductList() {
  this._empService.getProductList().subscribe({
    next: (res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: console.log,
  });
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
deleteProduct(id: number) {
  this._empService.deleteProduct(id).subscribe({
    next: (res) => {
      this._coreService.openSnackBar('Product deleted!', 'done');
      this.getProductList();
    },
    error: console.log,
  });
}

openEditForm(data: any) {
  const dialogRef = this._dialog.open(ProductAddComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getProductList();
      }
    },
  });
}

logout(){
  this.router.navigateByUrl('/login')
}
}
