import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageModule} from './homepage/homepage.module';
import {DetailsModule} from './details/details.module';

const routes: Routes = [
  {path : '' ,  loadChildren : () =>
      import('./homepage/homepage.module').then(m => m.HomepageModule)  },

  {path : 'product/:id' , loadChildren : () => import('./details/details.module').then(m => m.DetailsModule )   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
