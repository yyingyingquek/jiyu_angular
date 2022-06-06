import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductResolver } from './shop/product-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent, resolve:[ProductResolver] }, // localhost/shop/:id
    ],
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
