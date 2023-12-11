import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { Form1Component } from './form1/form1.component';
import { OkayrComponent } from './okayr/okayr.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { PdfComponent } from './pdf/pdf.component';
import { Home2Component } from './home2/home2.component';
import { LoginComponent } from './login/login.component';
import { BajasComponent } from './bajas/bajas.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'nav',component:NavComponent},
  {path: 'home', component:HomeComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'preguntas', component:PreguntasComponent},
  {path: 'quiensoy', component:QuiensoyComponent},
  {path: 'form1', component: Form1Component},
  {path: 'okayr', component: OkayrComponent},
  {path: 'vacantes', component: VacantesComponent},
  {path: 'pdf', component: PdfComponent},
  {path: 'home2', component: Home2Component},
  {path: 'login', component:LoginComponent},
  {path: 'bajas', component: BajasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
