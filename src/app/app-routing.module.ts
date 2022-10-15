import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';

const routes: Routes = [
  { path: '', component: ProductComponent},
  { path: 'categories', component: ProductsCategoriesComponent},
  { path: 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
