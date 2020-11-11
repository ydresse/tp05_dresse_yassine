import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Product } from "../../../models/product";

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProduct);
  }

  public getOneProduct(name: string): Observable<Product> {
    return this.getProduct().pipe(
      map((products: Product[]): Product => products.find(p => p.name === name))
    );
  }
}
