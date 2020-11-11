import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./modules/product/product/product.component";

const routes: Routes = [
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "account",
    loadChildren: () =>
      import("./modules/account/account.module").then(m => m.AccountModule)
  },
  {
    path: "",
    component: ProductComponent
  },
  {
    path: "**",
    component: ProductComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
