import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private fs: AngularFirestore) { }

  upload(first, last, phn, eml): Promise <DocumentReference> {
    return this.fs.collection('usrForm').add({
      firstName: first,
      lastName: last,
      phone: phn,
      email: eml
    });
  }
}
