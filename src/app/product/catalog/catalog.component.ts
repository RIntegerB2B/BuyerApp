import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { ProductService } from '../product.service';
import { Catalog } from './catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalogs: Catalog;
  viewCatalogForm: FormGroup;
  id;
  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService,
    private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.hideMenuTransparent();
    this.catalog();
    this.createForm();
  }

  createForm() {
    this.viewCatalogForm = this.fb.group({
      catId: ['']
    });
  }
  catalog() {
    this.productService.findCatalog().subscribe(data => {
      this.catalogs = data;
 console.log(this.catalogs);
    }, error => {
      console.log(error);
    });
  }

  getProduct(viewCatalogForm: FormGroup, catalogID: any) {
    this.id = catalogID.value;
    /* console.log(this.id); */
    this.router.navigate(['/Product', this.id]);
  }

}
