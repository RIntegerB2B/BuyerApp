import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Catalogs } from './catalog.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})

export class SubProductComponent implements OnInit {
  catalogId;
  Products: Catalogs;
  catId;
  viewProductForm: FormGroup;
  product;

  constructor(private fb: FormBuilder,
    private productService: ProductService, private navHeaderService: NavHeaderService,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.catalogId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.catalogId);
  }

  ngOnInit() {
    this.getCatalog(this.catalogId = this.activatedRoute.snapshot.paramMap.get('id'));
    this.createForm();
  }

  createForm() {
    this.viewProductForm = this.fb.group({
      productId: ['']
    });
  }
  getCatalog(catId) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getCatalog(this.catId).subscribe(data => {
      this.Products = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  getProduct(viewProductForm: FormGroup, productId) {
    this.product = productId.value;
    console.log(this.product);
this.router.navigate(['/Catalog', this.catalogId, 'Product', this.product ]);
  }
}
