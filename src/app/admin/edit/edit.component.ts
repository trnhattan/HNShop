import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  updateform: FormGroup = new FormGroup({
    name: new FormControl(),
    amout: new FormControl(),
    describe: new FormControl(),
    type: new FormControl(),
    img: new FormControl(),
    money: new FormControl(),
  });
  constructor(
    private _router: ActivatedRoute,
    private product: ProductService,
    private fb: FormBuilder
  ) {}
    id :any ;
  ngOnInit(): void {
    this._router.paramMap.subscribe((query) => {
      console.log(query.get('id'));
      this.id = query.get('id');
      this.product.getID(this.id ).subscribe((data) => {
        console.log(data);
        let product = data;
        this.updateform = new FormGroup({
          name: new FormControl(product.name),
          amout: new FormControl(product.amout),
          describe: new FormControl(product.describe),
          type: new FormControl(product.type),
          img: new FormControl(),
          money: new FormControl(product.money),
        });
      });
    });
    // this.id =this._router.snapshot.params.id;
    // this._router.paramMap.subscribe((query) => {
    // let id = query.get(id);
    // this.product.getID('id').subscribe((res) => {
    //   let product = res.result;
    //     this.updateform = this.fb.group({
    //       name: [product.name],
    //       amout: '',
    //       describe: '',
    //       type: '',
    //       img: '',
    //       money: '',
    // });
    //     });
    // });
  }

  onUpdate() {
    this.product.update(this.id, this.updateform.value).subscribe((data) => {
      console.log(data);
    });
  }
}
