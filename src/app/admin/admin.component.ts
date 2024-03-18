import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { query } from '@angular/animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  products: any;
  addform = this.fb.group({
    name: [''],
    amout: '',
    describe: '',
    type: '',
    img: '',
    money: '',
  });
  constructor(
    private _route: ActivatedRoute,
    private product: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.product.getproduct().subscribe((res) => {
    //   this.products = res;
    // });
    this.getlaidanhsachsanpham()
  }
  Ondelete(id: number) {
    this.product.deleted(id).subscribe((res) => {
      this.product.getproduct().subscribe((res) => {
        alert('Bạn Muốn Xóa Sản Phẩm Này');
        this.products = res;
      });
      console.log(res);
    });
  }
  onSubmit() {
    console.log(this.addform.value);
    this.product.add(this.addform.value).subscribe((res) => {
        res = true
        // this.getlaidanhsachsanpham()
    });
  }
  getlaidanhsachsanpham(){
    this.product.getproduct().subscribe((res) => {
      console.log(res);
      this.products = res;
      this.addform.reset();
    });
  }
}
