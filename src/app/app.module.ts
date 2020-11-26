import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CrearComponent } from './catalogo/crear/crear.component';
import { ListarComponent } from './catalogo/listar/listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { MatCardModule } from '@angular/material/card';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { CatalogoService } from './service/catalogo.service';
import { VerComponent } from './ropa/ver/ver.component';
import { RopaService } from './service/ropa.service';
import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    HomeComponent,
    CrearComponent,
    ListarComponent,
    VerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard, 
    CatalogoService,
    RopaService,
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
