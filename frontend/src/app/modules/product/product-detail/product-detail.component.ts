import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngxs/store";
import { Product } from "../../../../models/product";
import { ProductService } from "../../../product.service";
import { AddProduct } from "../../../../store/actions/products.action";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  public obs: Observable<Product>;
  public product: Product;
  private sub: Subscription;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.obs = this.productService.getOneProduct(
      this.route.snapshot.paramMap.get("name")
    );

    this.sub = this.obs.subscribe(item => (this.product = item));
  }

  public addProduct(product: Product): void {
    this.store.dispatch(new AddProduct(product));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
