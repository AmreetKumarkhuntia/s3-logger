import { session } from ".";

import type { S3Logs, Filter } from "$generated/types";

export function updateLogs(logs: S3Logs[]){
    const s3logsUpdationValue: S3Logs[] | null = logs.length === 0 ? null : logs;
	session.update(function (x){
        return {
            ...x,
            S3Logs: s3logsUpdationValue
        }
    })
}

export function updateActiveS3Log(logId: string){
    session.update(function(x){
        return {
            ...x,
            activeS3Log: logId
        }
    })
}

export function updateMaxS3LogView(amount: number){
    session.update(function(x){
        return {
            ...x,
            maxS3LogView: x.maxS3LogView + amount
        }
    })
}

export function updateS3LogFilterSetting(filter: string[]){
    session.update(function(x){
        return{
            ...x,
            S3logFilters: filter
        }
    })
}

export function updateFilteredS3Logs(logs: S3Logs[]){
    const s3logsUpdationValue: S3Logs[] | null = logs.length === 0 ? null : logs;
	session.update(function (x){
        return {
            ...x,
            filteredS3Logs: s3logsUpdationValue
        }
    })
}

export function updateFilterOptions(filters: Filter[]){
    session.update(function(x){
        return {
            ...x,
            filterOptions: filters
        }
    })
}

export * from "./utils";