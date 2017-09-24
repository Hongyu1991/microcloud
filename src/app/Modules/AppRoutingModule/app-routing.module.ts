import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PersonsComponent } from '../../Components/PersonsComponent/persons.component';
import { AddressesComponent } from '../../Components/AddressesComponent/addresses.component';


const routes: Routes = [

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
  // { path: '', redirectTo: '/login', pathMatch: 'full'},

  { path: 'persons', component: PersonsComponent },

  { path: 'addresses', component: AddressesComponent },

  // { path: 'login', component: LoginComponent }, 

  // { path: 'layout', 
  //   component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'orders', pathMatch: 'full' },
  //     { path: 'orders', component: OrdersComponent },
  //     { path: 'products', component: ProductsComponent },
  //     { path: 'policy', component: PolicyComponent },
  //     { path: 'settings', component: SettingsComponent },
  //     { path: 'support', component: SupportComponent }
  //   ]
  // },
  // { path: '**', component: PageNotFoundComponent }

];

  // getRoutes(){
  // //let defaultRoutes: Routes = [];
  // // check if user is logged in
  // // if yes, return routes
  // // else, return 
  // //let defaultRoutes = [{ path: '**', component: LoginComponent }];

  //   //return [{ path: '**', component: LoginComponent }];
  // }

@NgModule({
  imports: [ 
    //RouterModule.forChild(subroutes),
    RouterModule.forRoot(routes, { useHash: true })
    // RouterModule.forRoot(getRoutes(), { useHash: true })
    
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}