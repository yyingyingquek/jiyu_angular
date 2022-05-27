import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      // { path: ':id', component: SingleProductComponent },
      // { path: ':id', component: ProductDetailComponent }, // localhost/shop/:id
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
