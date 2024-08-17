import { StudentsRecords } from "./students-records.model";

import { createReducer, on } from "@ngrx/store";

import * as Actions from "./students-records.action";

import { adapter, initialState } from "./students-records";

export const studentsReducer = createReducer(
    initialState,
    on(Actions.callStudentsRecordsApiSuccess, 
        (state: any, { payload }: any) => {
            return adapter.addMany(payload, state);
        }
    ),
    on(Actions.addStudentsRecordsApiSuccess, 
        (state: any, { payload }: any) => {
            return adapter.addOne(payload, { ...state, error: null });
        }
    ),
    on(Actions.addStudentsRecordsApiFailure, 
        (state: any, { error }: any) => {
            console.error(Actions.actionsList.addStudentsRecordsApiFailure, error);
            return { ...state, error };
        }
    )
);