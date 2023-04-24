import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UserModule } from './user/user.module';
import { ProductsModule } from './porducts/products.module';

const routes: Routes = [
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then((m) => UserModule)
  },
  {
    path: 'products', 
    loadChildren: () => import('./porducts/products.module').then((m) => ProductsModule)
  },

  {path: '', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
