import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSliderComponent } from './main-slider/main-slider.component';

import { SwiperModule } from "swiper/angular";
import { ProductSliderOneComponent } from './product-slider-one/product-slider-one.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainSliderComponent,
    ProductSliderOneComponent,
    FooterComponent,
    ProductComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
