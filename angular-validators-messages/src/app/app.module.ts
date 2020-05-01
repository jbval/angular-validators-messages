import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './validators/right/right.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BottomComponent } from './validators/bottom/bottom.component';
import { TooltipComponent } from './validators/tooltip/tooltip.component';
import { ValidatorErrorMessageComponent } from './validator-error-message/validator-error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    BottomComponent,
    TooltipComponent,
    ValidatorErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent],
  entryComponents: [RightComponent, BottomComponent, TooltipComponent]
})
export class AppModule { }
