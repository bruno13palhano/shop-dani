import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchListComponent } from './product-search-list/product-search-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'categories', component: ProductsCategoriesComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: 'carousel', component: ProductCarouselComponent },
  // { path: '', redirectTo: 'categories', pathMatch: 'full'},
  { path: '', component: ProductListComponent },
  { path: 'search-products', component: ProductSearchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
