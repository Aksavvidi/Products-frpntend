import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'shared';
import {UiModule} from 'ui';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UserModule } from './user/user.module';
import { ProductsModule } from './porducts/products';
import { ProductsInsertComponent } from './porducts/products-insert/products-insert.component';
import { PublicModule } from './public/public.module';


const routes: Routes = [
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then((m) => UserModule)
  },
  {
    path: 'products', 
    loadChildren: () => import('./porducts/products').then((m) => ProductsModule)
  },
  {
    path: '', 
    loadChildren: () => import('./public/public.module')
    .then((m) => PublicModule),
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DropdownComponent,
    ProductsInsertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),SharedModule,UiModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
