import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css'],
})
export class LoginadminComponent implements OnInit {
  loginadmin: any = FormGroup;
  Admin: any = [];
  constructor(
    private fb: FormBuilder,
    private Commserv: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginadmin = this.fb.group({
      Email: [''],
      password: [''],
    });
    this.Commserv.getAdmin().subscribe((data: any) => {
      this.Admin = data;
    });
  }
  OnSubmit(data: any) {
    if (data.Email) {
      this.Admin.forEach((item: any) => {
        if (item.Email === data.Email && item.password === data.password) {
          localStorage.setItem('isLoggedIn', 'true');
          alert('Đăng nhập thành công');
          this.router.navigate(['admin']);
        }
        if (item.Email !== data.Email && item.password !== data.password) {
          localStorage.setItem('isLoggedIn', 'failed');
          alert('Đăng nhập Thất Bại');
          this.loginadmin.reset();
        }
      });
    }
  }
}
