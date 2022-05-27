import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { ProductService } from './shop/product.service';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    HeaderComponent,
    SingleProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
