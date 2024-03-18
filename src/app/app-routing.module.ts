import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { IteminforComponent } from './detail/iteminfor/iteminfor.component';
import { UserbuyComponent } from './detail/userbuy/userbuy.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RuleComponent } from './rule/rule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fullpage', component: FullpageComponent },
  { path: 'rulepage', component: RuleComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'login', component: LoginadminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'infor/:id', component: IteminforComponent },
  { path: 'user', component: UserbuyComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
