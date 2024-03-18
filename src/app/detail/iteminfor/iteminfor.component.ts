import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-iteminfor',
  templateUrl: './iteminfor.component.html',
  styleUrls: ['./iteminfor.component.css'],
})
export class IteminforComponent implements OnInit {
  productid: any;
  constructor(
    private _router: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    this._router.paramMap.subscribe((query) => {
      console.log(query.get('id'));
      let id = query.get('id');
      this.product.getID(id).subscribe((data) => {
        console.log(data);
        this.productid = data;
      });
    });
  }
}
