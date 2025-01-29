import { writable } from 'svelte/store';
import {
    updateLogs,
    updateActiveS3Log,
    updateMaxS3LogView,
    updateS3LogFilterSetting,
    updateFilteredS3Logs,
    updateFilterOptions,
} from './utils';

import type { S3Logs, Filter } from '$generated/types';

export type SessionStore = {
    S3Logs: S3Logs[] | null,
    filteredS3Logs: S3Logs[] | null,
    activeS3Log: string,
    maxS3LogView: number,
    S3logFilters: string[],
    filterOptions: Filter[]
}



const initValue: SessionStore = {
    S3Logs: null,
    filteredS3Logs: null,
    activeS3Log: "",
    maxS3LogView: 100,
    S3logFilters: ["requestMethod","requestPath","HTTPProtocol","statusCode","protocol","userAgent"],
    filterOptions: []
}

export const session = writable<SessionStore>(initValue);


export {
    updateLogs,
    updateActiveS3Log,
    updateMaxS3LogView,
    updateS3LogFilterSetting,
    updateFilteredS3Logs,
    updateFilterOptions,
}