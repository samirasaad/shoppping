// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

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

// routing
const routes:Routes=[
  {
    path: "" ,
   component:ActiveItemsComponent
  }
  , {
    path:"deleted-items",
   component:DeletedItemsComponent
  },
  {
    path:"category",
   component:CategoryComponent,
    children:[{
      path:":title",
      component:CategoryComponent,
    }]
  }
]
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
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
