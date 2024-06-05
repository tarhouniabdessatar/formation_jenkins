

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {



    constructor(private patientService: PatientService, private router: Router) { }

    addpatient(patientForm:any) {

        let patient = {

         nom: patientForm.nom,
         prenom: patientForm.prenom,
        sexe: patientForm.sexe,
         ServiceId: patientForm.ServiceId,

       };




    }
  }
