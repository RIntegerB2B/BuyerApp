import {Product} from './product.model';

export class Catalog {
    _id: string;
    catalogName: string;
    catalogType: string;
    material: string;
    capacity: string;
    catalogDescription: string;
    work: string;
    dispatch: string;
    imageType: string;
    catalogImageName: string;
    products: Product;


    constructor(
        catalogName: string,
        catalogType: string,
        material: string,
        capacity: string,
        catalogDescription: string,
        work: string,
        dispatch: string,
        imageType: string,
        products: Product
    ) {
        this.catalogName = catalogName;
        this.catalogType = catalogType;
        this.material = material;
        this.capacity = capacity;
        this.catalogDescription = catalogDescription;
        this.work = work;
        this.dispatch = dispatch;
        this.imageType = imageType;
        this.products = products;
    }
}
