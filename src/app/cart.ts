import { ProductModel } from "./product-model";

export class Cart {
}
export interface Cart{
    product:ProductModel;
    itemCount:number;
}
