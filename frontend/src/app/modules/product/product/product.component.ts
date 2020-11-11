import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Product } from "../../../../models/product";
import { ProductService } from "../product.service";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  public products: Observable<Product[]>;
  public filters: BehaviorSubject<Array<any>>;
  public productFilters: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProduct();
    this.filters = new BehaviorSubject(["", "", 0]);
    this.productFilters = combineLatest([this.products, this.filters]).pipe(
      map(([products, filters]) => {
        return products.filter(product => {
          let name: boolean;
          let category: boolean;
          let price: boolean;

          // Name
          if (filters[0] === null || filters[0].length === 0) {
            name = true;
          } else {
            name = product.name
              .toLocaleLowerCase()
              .includes(filters[0].toLocaleLowerCase());
          }

          // Category
          if (
            filters[1] === null ||
            filters[1].length === 0 ||
            filters[1] === "Aucune"
          ) {
            category = true;
          } else {
            category = product.category
              .toLocaleLowerCase()
              .includes(filters[1].toLocaleLowerCase());
          }

          // Price
          if (filters[2] === 0 || filters[2] === null) {
            price = true;
          } else {
            price = product.price <= filters[2];
          }

          return name && category && price;
        });
      })
    );
  }

  public onFilterEvent(f: Array<any>): void {
    this.filters.next(f);
  }
}
