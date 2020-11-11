import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Product } from "../../../../models/product";
import { DeleteProduct } from "../../../../store/actions/products.action";
import { ProductState } from "../../../../store/states/products.state";

@Component({
  selector: "app-product-chart",
  templateUrl: "./product-chart.component.html",
  styleUrls: ["./product-chart.component.css"]
})
export class ProductChartComponent implements OnInit {
  public products: Observable<Product[]>;
  public total: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.products = this.store.select(state => state.cart.products);
    this.total = this.store.select(ProductState.get_total_cart);
  }

  public DeleteProduct(product: Product): void {
    this.store.dispatch(new DeleteProduct(product));
  }
}
