import { Component, OnInit } from '@angular/core';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute , Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import {ProductService} from '../product.service';
import {Products} from './product.model';
@Component({
  selector: 'app-sub-product-view',
  templateUrl: './sub-product-view.component.html',
  styleUrls: ['./sub-product-view.component.css']
})
export class SubProductViewComponent implements OnInit {
  viewProductDetailForm: FormGroup;
  catalogId;
  productId;
  Products: Products[] = [];



  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute, private router: Router) {
      this.catalogId = this.activatedRoute.snapshot.paramMap.get('id');
      this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
     }

  ngOnInit() {
    this.createForm();
   this.getProduct(this.catalogId, this.productId);
  }

  createForm() {
this.viewProductDetailForm = this.fb.group({
  productId: ['']
});
  }
  getProduct(catId, prodId) {
    this.productService.getProduct(catId, prodId).subscribe(data => {
      this.Products.push(data);
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
