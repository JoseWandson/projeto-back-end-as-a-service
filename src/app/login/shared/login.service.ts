import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<firebase.User>;

  constructor(private router: Router, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  public login(mail: string, password: string) {

    return new Promise((resolve, reject) => {

      this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {

        localStorage['token'] = user.user.uid;
        this.router.navigate(['']);

      })
        .catch((error) => {
          console.log(error);
          this.router.navigate(['/login']);
        });
    })
      .catch((error) => {
        console.log(error);
        this.router.navigate(['/login']);
      });
  }

  public logout() {
    this.afAuth.auth.signOut();
    delete localStorage['token'];
    this.router.navigate(['/login']);
  }
}
