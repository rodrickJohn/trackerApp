import { Component, OnInit } from '@angular/core';

import {AppService} from '../../services/app.service';
import { Observable } from 'rxjs/Observable';

import {PatientDetails} from '../../models/patient-details.model';

import { AlertController } from '@ionic/angular';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tracking-form',
  templateUrl: './tracking-form.page.html',
  styleUrls: ['./tracking-form.page.scss'],
})
export class TrackingFormPage implements OnInit {

  public patient_details: PatientDetails[] = [];
  public patient_ID : string;
  constructor(private appService : AppService, public alertController: AlertController) { }

  ngOnInit() {
    //this.appService.getPatientDetails(this.patient_ID).subscribe((data: PatientDetails[]) => {
      //      this.patient_details = data;
        //  });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Updated details to register',
      buttons: ['OK']
    });

    await alert.present();
  }
}
