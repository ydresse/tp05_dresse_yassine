import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-filtre",
  templateUrl: "./product-filtre.component.html",
  styleUrls: ["./product-filtre.component.css"]
})
export class ProductFiltreComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  // @Output() filterEvent: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  // filterForm = new FormGroup({
  //   nameFilter: new FormControl(''),
  //   categoryFilter: new FormControl(''),
  //   priceFilter: new FormControl('')
  // });
  // public filterProduct: Subscription;
  // constructor() {}
  // ngOnInit() {
  //   this.filterProduct = this.filterForm.valueChanges.subscribe(filter => {
  //     this.filterEvent.emit([
  //       filter.nameFilter,
  //       filter.categoryFilter,
  //       filter.priceFilter
  //     ]);
  //   });
  // }
  // ngOnDestroy(): void {
  //   this.filterProduct.unsubscribe();
  // }
}
