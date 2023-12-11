import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { FooterComponent } from './footer/footer.component';
import { UsernameComponent } from './components/username/username.component';
import { ChatComponent } from './containers/chat/chat.component';
import { Form1Component } from './form1/form1.component';
import { LoginComponent } from './login/login.component';
import { OkayrComponent } from './okayr/okayr.component';
import { VacantesComponent } from './vacantes/vacantes.component';
import { PdfComponent } from './pdf/pdf.component';
import { Home2Component } from './home2/home2.component';
import { BajasComponent } from './bajas/bajas.component';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    NavComponent,
    PreguntasComponent,
    QuiensoyComponent,
    FooterComponent,
    UsernameComponent,
    ChatComponent,
    Form1Component,
    LoginComponent,
    OkayrComponent,
    VacantesComponent,
    PdfComponent,
    Home2Component,
    BajasComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
