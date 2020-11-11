import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductStateModel } from "./product-state.model";
import { Product } from "../../models/product";
import { AddProduct, DeleteProduct } from "../actions/products.action";

@State<ProductStateModel>({
  name: "cart",
  defaults: {
    products: []
  }
})
export class ProductState {
  @Selector()
  static get_nb_products(state: ProductStateModel): number {
    return state.products.length;
  }

  @Selector()
  static get_total_cart(state: ProductStateModel): number {
    let total: number = 0;
    state.products.forEach((product: Product) => {
      total += product.price;
    });
    return total;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ): void {
    const state = getState();
    patchState({
      products: [...state.products, payload]
    });
  }

  @Action(DeleteProduct)
  remove(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: DeleteProduct
  ): void {
    const state = getState();
    const index = state.products.findIndex(
      (element: Product) => element.name === payload.name
    );

    // Produit trouvé
    if (index !== -1) {
      const tmpChart = state.products;
      tmpChart.splice(index, 1);

      patchState({
        products: tmpChart
      });
    }
  }
}
