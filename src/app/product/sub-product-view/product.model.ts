export class Products {
    _id: string;
    productName: string;
    price: Number;
    sizeDescription: string;
    productTypeDesc: string;
    size: string;
    productDescription: string;
    cod: Boolean;
    dispatchDesc: string;
    watsAppDesc: string;
    imageType: string;
    productImageName: string;
    constructor(
        _id: string,
        productName: string,
        price: Number,
        sizeDescription: string,
        productTypeDesc: string,
        size: string,
        productDescription: string,
        cod: Boolean,
        dispatchDesc: string,
        watsAppDesc: string,
        imageType: string
    ) {
        this._id = _id;
        this.productName = productName;
        this.price = price;
        this.sizeDescription = sizeDescription;
        this.productTypeDesc = productTypeDesc;
        this.size = size;
        this.productDescription = productDescription;
        this.cod = cod;
        this.dispatchDesc = dispatchDesc;
        this.watsAppDesc = watsAppDesc;
        this.imageType = imageType;

    }
}
