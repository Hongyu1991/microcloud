"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
var login_component_1 = require("../../Components/LoginComponent/login.component");
var orders_component_1 = require("../../Components/OrdersComponent/orders.component");
var layout_component_1 = require("../../Components/LayoutComponent/layout.component");
var not_found_component_1 = require("../../Components/PageNotFoundComponent/not-found.component");
var products_component_1 = require("../../Components/ProductsComponent/products.component");
var policy_component_1 = require("../../Components/PolicyComponent/policy.component");
var settings_component_1 = require("../../Components/SettingsComponent/settings.component");
var support_component_1 = require("../../Components/SupportComponent/support.component");
var routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'dashboard',  component: DashboardComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'layout',
        component: layout_component_1.LayoutComponent,
        children: [
            { path: '', redirectTo: 'orders', pathMatch: 'full' },
            { path: 'orders', component: orders_component_1.OrdersComponent },
            { path: 'products', component: products_component_1.ProductsComponent },
            { path: 'policy', component: policy_component_1.PolicyComponent },
            { path: 'settings', component: settings_component_1.SettingsComponent },
            { path: 'support', component: support_component_1.SupportComponent }
        ]
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
// getRoutes(){
// //let defaultRoutes: Routes = [];
// // check if user is logged in
// // if yes, return routes
// // else, return 
// //let defaultRoutes = [{ path: '**', component: LoginComponent }];
//   //return [{ path: '**', component: LoginComponent }];
// }
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            //RouterModule.forChild(subroutes),
            router_1.RouterModule.forRoot(routes, { useHash: true })
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map