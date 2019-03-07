import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// components
import { AppComponent } from '../app.component';
import { ActiveItemsComponent } from '../active-items/active-items.component';
import { DeletedItemsComponent } from '../deleted-items/deleted-items.component';
import { ItemComponent } from '../item/item.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ControllerComponent } from '../controller/controller.component';
import { CategoryComponent } from '../category/category.component';

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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]

})
export class RoutingModule { }
