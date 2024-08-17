import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { actionsList, addStudentsRecordsApiFailure } from "./students-records.action";
import { StudentsRecordsService } from '../services/students-records.service';

@Injectable()
export class StudentsRecordsEffects {
    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.callStudentsRecordsApi),
        mergeMap(() => this.studentsRecordsService.getStudentsRecords()
        .pipe(
            map(studentsRecords => ({ type: actionsList.callStudentsRecordsApiSuccess, payload: studentsRecords })),
            catchError(() => EMPTY)
        ))
    ));

    addStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.addStudentsRecordsApi),
        mergeMap((action: any) => this.studentsRecordsService.addStudentsRecord(action.payload)
        .pipe(
            map(studentsRecords => ({ type: actionsList.addStudentsRecordsApiSuccess, payload: studentsRecords })),
            catchError((err) => of(addStudentsRecordsApiFailure({ error: err })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private studentsRecordsService: StudentsRecordsService
    ){}
}