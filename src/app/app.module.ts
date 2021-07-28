import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloseaccountComponent } from './telecom/closeaccount/closeaccount.component';
import { StatusaccountComponent } from './telecom/statusaccount/statusaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    CloseaccountComponent,
    StatusaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CloseaccountComponent,StatusaccountComponent]
})
export class AppModule { }
