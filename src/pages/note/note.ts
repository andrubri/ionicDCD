import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Media, MediaObject } from '@ionic-native/media';
import * as firebase from 'firebase';

import * as moment from 'moment';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class NotePage {

  estado:string = "0";
  tipo:string = "0";
  inRecord:boolean = false;
  Notas:Array<Object> = new Array();
  NewAudio: MediaObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public toastCtrl: ToastController, public storage: Storage, public media: Media) {
    var self = this; 
    this.storage.get("login").then((val) =>{
      if(val == "true"){
        
      }else{
        let toast = this.toastCtrl.create({
          message: "Debe hacer login primero",
          duration: 3000,
          position: "top"
        });
        this.navCtrl.goToRoot({});
        toast.present();
        
      }
      
      
    });
   
  }

  dataURItoBlob(dataURI) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };

  startAudio(){
    let fecha = new Date();
    this.NewAudio = this.media.create(fecha.getTime()+'.mp3');
    this.NewAudio.startRecord();
    this.inRecord = true;
  }

  stopAudio(){
    this.NewAudio.stopRecord();
    this.inRecord = false;
  }
}
