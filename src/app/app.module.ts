import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { FooterComponent } from './footer/footer.component';
import { ProductSearchListComponent } from './product-search-list/product-search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductDetailComponent,
    ProductsCategoriesComponent,
    ProductComponent,
    ProductListComponent,
    ProductCarouselComponent,
    ProductGridComponent,
    FooterComponent,
    ProductSearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
