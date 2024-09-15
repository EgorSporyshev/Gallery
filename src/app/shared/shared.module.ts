import { CommonModule } from "@angular/common";
import  { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { HeadergallerComponent } from './components/headergaller/headergaller.component';


@NgModule( {
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  exports: [ReactiveFormsModule, FormsModule,ButtonComponent,InputComponent,HeadergallerComponent],
  declarations: [
    ButtonComponent,
    InputComponent,
    HeadergallerComponent,
   
  ],
})
export class SharedModule { }
