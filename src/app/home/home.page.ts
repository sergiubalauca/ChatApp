/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ToastController, ViewWillLeave } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillLeave {
  public message = '';
  messages = [];
  public currentUser = '';

  public constructor(
    private socket: Socket,
    private toastCtrl: ToastController) { }

  public ngOnInit() {
    this.socket.connect();

    const name = `User-${new Date().getTime()}`;
    this.currentUser = name;

    this.socket.emit('set-name', name);
    this.socket.fromEvent('users-changed')
      .subscribe(socketData => {
        console.log('socket data: ', socketData);
        const user = socketData['user'];
        if (socketData['event'] === 'left') {
          this.showToast(`User left: ${user}`);
        }
        else {
          this.showToast(`User joined: ${user}`);
        }
      });

    this.socket.fromEvent('message')
      .subscribe(messsage => {
        console.log('New: ', messsage);
        this.messages.push(messsage);
      });
  }


  public sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
  }

  public async showToast(msg: any) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });

    toast.present();
  }

  public ionViewWillLeave() {
    this.socket.disconnect();
  }
}
