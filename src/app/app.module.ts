import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
  import {NgForageModule, NgForageConfig, Driver} from 'ngforage';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  NgForageModule.forRoot({
        name: 'MyApp',
        driver: [ 
          Driver.INDEXED_DB,
          Driver.LOCAL_STORAGE
        ]
      }) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
