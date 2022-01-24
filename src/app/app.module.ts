import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };
// const config: SocketIoConfig = { url: 'http://127.0.0.1:58260/', options: {} }; // Docker
const config: SocketIoConfig = { url: 'https://damp-taiga-68315.herokuapp.com', options: {} };
// const config: SocketIoConfig = { url: '192.168.100.2:8000', options: {} };
// const config: SocketIoConfig = { url: '192.168.187.36:8000', options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SocketIoModule.forRoot(config)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
