import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './Components/AppComponent/app.component';
import { PersonsComponent } from './Components/PersonsComponent/persons.component';
import { AddressesComponent } from './Components/AddressesComponent/addresses.component';
import { PersonFormComponent } from './Components/PersonsComponent/person-form.component';

import { AppRoutingModule }  from './Modules/AppRoutingModule/app-routing.module';

import { PersonService }          from './person.service';
import { AddressService } from './address.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    AddressesComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ PersonService, AddressService ],
  bootstrap: [AppComponent]
})
export class AppModule {

}


