import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';
import{ FormsModule,ReactiveFormsModule} from "@angular/forms"
import { VeterinarioService } from './services/veterinario.service';


@NgModule({
  declarations: [
    AppComponent,
    VeterinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VeterinarioService],
  bootstrap: [AppComponent]

})
export class AppModule { }
