import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userbuy',
  templateUrl: './userbuy.component.html',
  styleUrls: ['./userbuy.component.css'],
})
export class UserbuyComponent implements OnInit {
  constructor() {}
  userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    amout: new FormControl(),
    address: new FormControl(),
  });
  ngOnInit(): void {}
  onSubmit() {
    alert('Đã Gửi Đơn Hàng');
    console.log(this.userForm.value);
  }
}
