import { createSelector, createFeatureSelector } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";
import { adapter, StudentsRecordsState } from "./students-records";

export const selectStudentsState = createFeatureSelector<StudentsRecordsState>('students');
export interface AppState {
    students: StudentsRecords[]
}

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors();

export const selectStudentsEntities = createSelector(
    selectStudentsState,
    selectEntities
);

export const selectStudentById = (id: number) => createSelector(
    selectStudentsEntities,
    (entities) => { return entities[id]; }
);

export const selectAllStudents = createSelector(
    selectStudentsState,
    selectAll
);