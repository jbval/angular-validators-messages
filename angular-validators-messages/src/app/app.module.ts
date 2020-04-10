import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './validators/right/right.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BottomComponent } from './validators/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent],
  entryComponents: [RightComponent, BottomComponent]
})
export class AppModule { }
