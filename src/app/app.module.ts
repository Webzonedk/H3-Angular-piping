import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorseConverterPipe } from './pipes/morse-converter.pipe';
import { Md5ConverterPipe } from './pipes/md5-converter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MorseConverterPipe,
    Md5ConverterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
