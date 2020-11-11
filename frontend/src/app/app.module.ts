import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TetiereComponent } from "./tetiere/tetiere.component";
import { ProductService } from "./modules/product/product.service";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { NgxsModule } from "@ngxs/store";
import { ProductState } from "../store/states/products.state";
import { AccountService } from "./modules/account/account.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductState])
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService, AccountService]
})
export class AppModule {}
