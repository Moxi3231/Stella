export default class Product {
  constructor() {
    this.product_title = "";
    this.product_brand = "";
    this.product_price = 0;
    this.product_desciprition = "";
    this.image_url = "";
  }
  setProductTitle(ptitle) {
    this.product_title = ptitle;
  }
  setImageUrl(iurl) {
    this.image_url = iurl;
  }
  setProductDescription(pdescp) {
    this.product_desciprition = pdescp;
  }
  setProductPrice(pprice) {
    this.product_price = pprice;
  }
  setProductBrand(pbrand) {
    this.product_brand = pbrand;
  }
  setPData(ptitle, pbrand, pprice, pdesc, pimage) {
    this.setProductBrand(pbrand);
    this.setProductPrice(pprice);
    this.setImageUrl(pimage);
    this.setProductDescription(pdesc);
    this.setProductTitle(ptitle);
  }
}

export class Use_State_Server{
    constructor(ival){
        this.var = ival;
    }
    setVal(ival){
        this.var = ival
    }
}