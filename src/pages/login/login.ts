import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "";
  clave: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController, public storage: Storage) {
  }

  ingresar(){
    let loguear = false;
    /*
    this.storage.get(this.email).then((val) =>{
      val = JSON.parse(val);
      if(val){
        if(val.email == this.email && val.clave == this.clave){
          loguear = true;
        }

        if (loguear){
          let loader = this.loadingCtrl.create({
            content: "Ingresando..",
            duration: 3000
          });
          loader.present().then(x => { 
    */
            this.storage.set("login", "true");
            this.navCtrl.push(ListPage,{});

    /*
          });
        }else{
          let toast = this.toastCtrl.create({
            message: "Datos ingresados incorrectos",
            duration: 3000,
            position: "top"
          });
          this.storage.set("login", "false");
          toast.present();
        }
      }else{
        let toast = this.toastCtrl.create({
          message: "Datos ingresados incorrectos",
          duration: 3000,
          position: "top"
        });
        this.storage.set("login", "false");
        toast.present();
      }
    });
    */
    
  }

  redireccionar(){
    this.navCtrl.setRoot(HomePage);
  }
}