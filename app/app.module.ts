// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { RoutingModule }  from './routing/routing.module';

// components
import { AppComponent } from './app.component';
import { ActiveItemsComponent } from './active-items/active-items.component';
import { DeletedItemsComponent } from './deleted-items/deleted-items.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ControllerComponent } from './controller/controller.component';
import { CategoryComponent } from './category/category.component';

// services 
import { ConfigService } from './config.service';


@NgModule({
  declarations: [
    AppComponent,
    ActiveItemsComponent,
    DeletedItemsComponent,
    ItemComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ControllerComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
    ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
