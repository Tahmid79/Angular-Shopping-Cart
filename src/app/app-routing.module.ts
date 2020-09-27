import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '' ,  loadChildren : () =>
      import('./homepage/homepage.module').then(m => m.HomepageModule)  },


  {path : 'cart' , loadChildren : () =>  import('./cartpage/cartpage.module').then(m => m.CartpageModule)  } ,

  {path : 'product/:id' , loadChildren : () => import('./details/details.module').then(m => m.DetailsModule )   } ,



]  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
