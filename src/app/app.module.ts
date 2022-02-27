import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { ZooComponent } from './zoo/zoo.component';
import { ZooState } from './store/animal.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';



@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ZooState]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
