import { Product } from "../../models/product";
export const ADD_PRODUCT = "[PRODUCT] ADD";
export const DELETE_PRODUCT = "[PRODUCT] DELETE";

export class AddProduct {
  constructor(public payload: Product) {}

  static readonly type = ADD_PRODUCT;
}

export class DeleteProduct {
  constructor(public payload: Product) {}

  static readonly type = DELETE_PRODUCT;
}
