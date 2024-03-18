import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  products: any;

  constructor(private product: ProductService) {}
  seachForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    amout: new FormControl(),
    address: new FormControl(),
  });
  ngOnInit(): void {
    this.product.getproduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
  onSeach() {
    this.product.getproduct(this.seachForm.value.name).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
