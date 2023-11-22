import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    DoctorComponent,
    ConfirmdialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,FormsModule,HttpClientModule,
    FlexLayoutModule,MatButtonModule,MatInputModule,
    MatDialogModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
