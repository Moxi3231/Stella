import { useState } from "react";

export default class Product {
  constructor() {
    [this.product_title, this.setProductTitle] = useState("");
    [this.product_brand, this.setProductBrand] = useState("");
    [this.product_price, this.setProductPrice] = useState(0);
    [this.product_desciprition, this.setProductDescription] = useState("");
    [this.image_url, this.setImageUrl] = useState("");
    [this.product_id, this.setProductID] = useState(null);
  }

  setPData(_id, ptitle, pbrand, pprice, pdesc, pimage) {
    this.setProductID(_id);
    this.setProductBrand(pbrand);
    this.setProductPrice(pprice);
    this.setImageUrl(pimage);
    this.setProductDescription(pdesc);
    this.setProductTitle(ptitle);
  }
}
