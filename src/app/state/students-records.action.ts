import { createAction, props } from "@ngrx/store";

import { StudentsRecords } from "./students-records.model";

export const actionsList = {
    // [Component Name] Triggered task
    callStudentsRecordsApi: "[ Students Table Component ] Call students records api",
    callStudentsRecordsApiSuccess: "[ Students Table Component ] Call students records api success",
};

export const callStudentsRecordsApi = createAction(actionsList.callStudentsRecordsApi);
export const callStudentsRecordsApiSuccess = createAction(actionsList.callStudentsRecordsApiSuccess, props<{ payload: StudentsRecords[] }>())