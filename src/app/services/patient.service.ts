
import { Injectable } from '@angular/core';
import { Patient } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService  {

  constructor(private http:HttpClient) { }

  getPatient()
  {
    return this.http.get<Patient[]>("http://localhost:5170/api/Patients");
  }

  deletePatient(patient:Patient)
  {

    return this.http.delete("http://localhost:5170/api/Patients/" +patient.id);
  }
  addFournisseur(patient:Patient)
  {
    return this.http.post<Patient>("http://localhost:5170/api/Patients", patient);
  }

  UpdateFournisseur(patient:Patient)
  {
    return this.http.put<Patient>("http://localhost:5170/api/Patients/"+patient.id, patient);
  }
  getFournisseurById(idpatient:number)
  {
    return this.http.get<Patient>("http://localhost:5170/api/Patients/"+idpatient);
  }
}
