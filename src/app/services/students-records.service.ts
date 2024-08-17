import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsRecords } from "../state/students-records.model";

@Injectable({
    providedIn: 'root'
})
export class StudentsRecordsService {
    constructor(
        private http: HttpClient
    ) {}

    getStudentsRecords() {
        return this.http.get<Array<StudentsRecords>>("/api/studentsRecords");
    }

    addStudentsRecord(body: StudentsRecords) {
        return this.http.post<StudentsRecords>("/api/studentsRecords", body);
    }
}