import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { DetailComponent } from './detail/detail.component';
import { RuleComponent } from './rule/rule.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './admin/edit/edit.component';
import { IteminforComponent } from './detail/iteminfor/iteminfor.component';
import { UserComponent } from './user/user.component';
import { UserbuyComponent } from './detail/userbuy/userbuy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullpageComponent,
    DetailComponent,
    RuleComponent,
    LoginadminComponent,
    AdminComponent,
    EditComponent,
    IteminforComponent,
    UserComponent,
    UserbuyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
