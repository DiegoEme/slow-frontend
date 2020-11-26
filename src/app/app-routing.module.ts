import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './catalogo/crear/crear.component';
import { ListarComponent } from './catalogo/listar/listar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './guard/auth.guard';
import { VerComponent } from './ropa/ver/ver.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'listarPrendas',
  component: ListarComponent,
  canActivate: [AuthGuard]
},
{
  path: 'crearPrendas',
  component: CrearComponent,
  canActivate: [AuthGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'verPrendas',
  component: VerComponent,
  canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
