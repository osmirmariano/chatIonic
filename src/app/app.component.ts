import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Chat} from'../pages/chat/chat';
import {Login}from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import {Rooms}from '../pages/rooms/rooms';
import {Mid} from '../pages/mid/mid';

import firebase from'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = Login;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    var config = {
        apiKey: "AIzaSyCyiJqTtAhS8MljWml7-PoWqo3OWvtYlxI",
        authDomain: "chatamigos-9ef0d.firebaseapp.com",
        databaseURL: "https://chatamigos-9ef0d.firebaseio.com",
        projectId: "chatamigos-9ef0d",
        storageBucket: "",
        messagingSenderId: "422562944988"
    };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged((user) => {
        
              if (!user) {
                  this.rootPage = Login;
                 

              } else {
                  this.rootPage = Mid;
                  
              }
          
      });


      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
