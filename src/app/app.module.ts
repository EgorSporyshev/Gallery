
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {UserService} from "./shared/services/user.service";
import { SystemComponent } from './system/system.component';
import { SystemModule } from './system/system.module';
import { AuthService } from './shared/services/auth.service';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SystemComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    SystemModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
