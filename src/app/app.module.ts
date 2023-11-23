import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CargoComponent } from './component/cargo/cargo.component';
import { DepartamentoComponent } from './component/departamento/departamento.component';
import { UserComponent } from './component/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargoService } from './component/cargo/cargo.service';
import { DepartamentoService } from './component/departamento/departamento.service';
import { UserService } from './component/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CreateUserComponent } from './component/user/create-user/create-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderLayoutComponent } from './component/layout/header-layout/header-layout.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    DepartamentoComponent,
    UserComponent,
    CreateUserComponent,
    HeaderLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule, MatFormFieldModule,
     MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     MatFormFieldModule,
     MatExpansionModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [CargoService, DepartamentoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
