import type { S3Logs, Filter, FilterItem } from "$generated/types";


export function getS3FilterOptions(logs: S3Logs[] | null, filterProperties: string[]): Filter[] {
    let filterOptions: Filter[] = [];
    let curr: number;

    if (logs === null) {
        return filterOptions;
    }

    for (const key of filterProperties) {
        const myMap = new Map<string, number>();
        let filterItems: FilterItem[] = [];

        for (const log of logs) {
            const s3logValue = log[key as keyof S3Logs];
            if (log.hasOwnProperty(key) && s3logValue) {
                curr = myMap.get(s3logValue) ?? 0;
                myMap.set(s3logValue, curr + 1);
            }
        }
        for (const [item, count] of myMap) {
            filterItems.push({ label: item, value: item, count: count })
        }
        filterOptions.push({ labelName: key, valueHolder: [], values: filterItems });
    }


    return filterOptions;
}