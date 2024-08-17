import { createAction, props } from "@ngrx/store";

import { StudentsRecords } from "./students-records.model";

export const actionsList = {
    // [Component Name] Triggered task
    callStudentsRecordsApi: "[ Students Table Component ] Call students records api",
    callStudentsRecordsApiSuccess: "[ Students Table Component ] Call students records api success",
    addStudentsRecordsApi: "[ Students Records Component ] Add students records api call",
    addStudentsRecordsApiSuccess: "[ Students Records Component ] Add students records api success",
    addStudentsRecordsApiFailure: "[ Students Records Component ] Add students records api failure",
};

export const callStudentsRecordsApi = createAction(actionsList.callStudentsRecordsApi);
export const callStudentsRecordsApiSuccess = createAction(actionsList.callStudentsRecordsApiSuccess, props<{ payload: StudentsRecords[] }>())
export const addStudentsRecordsApi = createAction(actionsList.addStudentsRecordsApi, props<{ payload: StudentsRecords }>())
export const addStudentsRecordsApiSuccess = createAction(actionsList.addStudentsRecordsApiSuccess, props<{ payload: StudentsRecords }>())
export const addStudentsRecordsApiFailure = createAction(actionsList.addStudentsRecordsApiFailure, props<{ error: StudentsRecords }>())