import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { NotePage } from '../note/note';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  estado:string = "0";
  tipo:string = "0";
  notas: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage, public fireDatabase: AngularFireDatabase) {
    var self = this; 
    this.storage.get("login").then((val) =>{
      if(val == "true"){
        this.notas = this.fireDatabase.list('/notas');
        for(let x = 0; x < this.notas.length; x++){
          var nota = this.notas[x];
          nota.fecha = moment(nota.fecha).format('DD/MM/YYYY hh:mm:ss');
        }
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

  gotoNew(){
    this.navCtrl.setRoot(NotePage);
  }

  gotoDetail(element){
    this.navCtrl.setRoot(NotePage);
  }

}

